require('dotenv').config();
const express = require('express');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
const { HfInference } = require('@huggingface/inference');

const app = express();
app.use(express.json()); // Enable JSON body parsing

app.use(express.static(__dirname));

// Initialize AI SDKs lazily to prevent crashing if keys are missing on startup
let ai = null;
let hf = null;

app.post('/api/storyboard', async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is missing.' });
    }
    if (!ai) ai = new GoogleGenAI({});

    const { prompt } = req.body;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert film director. The user wants a video about: "${prompt}". 
      Create a 3-scene storyboard. For each scene, provide a highly detailed, comma-separated visual prompt for an AI image generator to create the establishing shot. 
      Respond ONLY with a valid JSON array of objects, like this: [{"scene": 1, "prompt": "wide shot, cinematic lighting, cyberpunk city, neon..."}, ...]`,
      config: { responseMimeType: 'application/json' }
    });
    
    res.json(JSON.parse(response.text));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate storyboard' });
  }
});

app.post('/api/generate-frame', async (req, res) => {
  try {
    if (!process.env.HUGGINGFACE_API_KEY) {
      return res.status(500).json({ error: 'HUGGINGFACE_API_KEY environment variable is missing. Add it to .env or platform settings.' });
    }
    if (!hf) hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

    const { prompt } = req.body;
    // FLUX.1-schnell is extremely fast and high quality for free tiers
    const blob = await hf.textToImage({
      model: 'black-forest-labs/FLUX.1-schnell',
      inputs: prompt,
      parameters: { guidance_scale: 0.0, num_inference_steps: 4 }
    });
    
    const arrayBuffer = await blob.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    res.json({ image: `data:image/jpeg;base64,${base64}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate image frame' });
  }
});

const MasterOrchestrator = require('./orchestrator');

app.post('/api/orchestrate', async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY || !process.env.HUGGINGFACE_API_KEY) {
      return res.status(500).json({ error: 'Missing API Keys in environment.' });
    }

    const { prompt } = req.body;
    const orchestrator = new MasterOrchestrator(process.env.GEMINI_API_KEY, process.env.HUGGINGFACE_API_KEY);
    
    const result = await orchestrator.execute(prompt);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Orchestration failed' });
  }
});

// Explicitly serve studio.html on /studio route
app.get('/studio', (req, res) => {
  res.sendFile(path.join(__dirname, 'studio.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
