const { GoogleGenAI } = require('@google/genai');
const { HfInference } = require('@huggingface/inference');

class MasterOrchestrator {
  constructor(geminiKey, hfKey) {
    this.ai = new GoogleGenAI({ apiKey: geminiKey });
    this.hf = new HfInference(hfKey);
  }

  // Phase 1: The Brain breaks the concept into actionable blueprints
  async architectMasterpiece(concept) {
    console.log(`[ORCHESTRATOR] Architecting concept: "${concept}"`);
    
    const prompt = `You are a Master Film Director. The user wants a video about: "${concept}".
    Break this down into exactly 2 cinematic scenes.
    Return ONLY a valid JSON object matching this schema:
    {
      "music_prompt": "Prompt for Riffusion/MusicGen (e.g., epic cinematic sci-fi synth)",
      "scenes": [
        {
          "scene_number": 1,
          "video_prompt": "Prompt for Wan-2.2/MiniMax (e.g., 4k, cinematic lighting, wide shot of...)",
          "narration_text": "Text for Kokoro/OpenVoice to speak."
        }
      ]
    }`;

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' }
    });

    return JSON.parse(response.text);
  }

  // Phase 2: Call Kokoro/OpenVoice for Voiceover
  async generateVoiceover(text) {
    console.log(`[ORCHESTRATOR] Generating Voiceover...`);
    // Note: We use HuggingFace inference. You can map this to any specific Kokoro/OpenVoice endpoint.
    const audioBlob = await this.hf.textToSpeech({
      model: 'suno/bark-small', // Placeholder for Kokoro/OpenVoice API endpoint
      inputs: text
    });
    return Buffer.from(await audioBlob.arrayBuffer()).toString('base64');
  }

  // Phase 2: Call Riffusion/MusicGen for Soundtrack
  async generateSoundtrack(prompt) {
    console.log(`[ORCHESTRATOR] Generating Soundtrack...`);
    const audioBlob = await this.hf.textToSpeech({
      model: 'facebook/musicgen-small', // Generates royalty-free music
      inputs: prompt
    });
    return Buffer.from(await audioBlob.arrayBuffer()).toString('base64');
  }

  // Phase 2: Call Wan-2.2 / MiniMax / Image Gen for Visuals
  async generateVisuals(prompt) {
    console.log(`[ORCHESTRATOR] Generating Visuals...`);
    // Using FLUX as a fast stand-in for the video baseline, can be swapped to Wan-2.2 video endpoints
    const imageBlob = await this.hf.textToImage({
      model: 'black-forest-labs/FLUX.1-schnell',
      inputs: prompt
    });
    return Buffer.from(await imageBlob.arrayBuffer()).toString('base64');
  }

  // The Main Pipeline Execution
  async execute(concept) {
    try {
      // 1. Get the Blueprint
      const blueprint = await this.architectMasterpiece(concept);
      
      // 2. Fire off background music generation asynchronously
      const musicPromise = this.generateSoundtrack(blueprint.music_prompt);

      // 3. Process scenes (Voice + Video in parallel)
      const processedScenes = [];
      for (const scene of blueprint.scenes) {
        const [voiceBase64, visualBase64] = await Promise.all([
          this.generateVoiceover(scene.narration_text),
          this.generateVisuals(scene.video_prompt)
        ]);

        processedScenes.push({
          scene: scene.scene_number,
          voice: `data:audio/wav;base64,${voiceBase64}`,
          visual: `data:image/jpeg;base64,${visualBase64}`,
          narration: scene.narration_text
        });
      }

      // 4. Await music completion
      const musicBase64 = await musicPromise;

      return {
        success: true,
        soundtrack: `data:audio/wav;base64,${musicBase64}`,
        scenes: processedScenes
      };

    } catch (error) {
      console.error("[ORCHESTRATOR] Error:", error);
      throw error;
    }
  }
}

module.exports = MasterOrchestrator;
