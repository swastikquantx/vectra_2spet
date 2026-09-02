const fs = require('fs');

let html = fs.readFileSync('Admin_Panel.html', 'utf-8');

// Inject React + Babel scripts into <head>
if (!html.includes('unpkg.com/react@18')) {
    html = html.replace('</head>', `
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>`);
}

// Replace the main scrollable content with our React root
const startScrollable = html.indexOf('<!-- Scrollable content -->');
const endMain = html.indexOf('</main>');

if (startScrollable !== -1 && endMain !== -1) {
    const before = html.substring(0, startScrollable);
    const after = html.substring(endMain);
    
    const reactRoot = `<!-- Scrollable content (React CRM) -->
    <div class="flex-1 overflow-y-auto bg-white text-slate-900 custom-scrollbar" id="crm-root" style="color: black !important; font-family: 'Inter', sans-serif;">
    </div>
    
    <script type="text/babel">
      const STAGES = [
        { key: 'prospecting', label: '1. Prospecting', prob: 20, color: 'border-slate-300' },
        { key: 'qualification', label: '2. Qualification', prob: 40, color: 'border-blue-400' },
        { key: 'proposal', label: '3. Proposal', prob: 60, color: 'border-amber-400' },
        { key: 'negotiation', label: '4. Negotiation', prob: 80, color: 'border-indigo-500' },
        { key: 'closed_won', label: '5. Closed Won', prob: 100, color: 'border-emerald-500' },
        { key: 'closed_lost', label: '6. Closed Lost', prob: 0, color: 'border-rose-400' }
      ];

      const Plus = ({ size }) => (
        <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      );
      
      const ChevronRight = ({ size }) => (
        <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      );

      const LeadsView = ({ leads, onOpenAddLead, onUpdateLeadStage, searchQuery }) => {
        const filtered = leads.filter((l) =>
          l.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.source.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const totalPipeline = leads.filter(l => l.stage !== 'closed_lost').reduce((a, b) => a + b.value, 0);
        const weightedPipeline = leads.filter(l => l.stage !== 'closed_lost').reduce((a, b) => a + (b.value * b.probability) / 100, 0);
        const wonRevenue = leads.filter(l => l.stage === 'closed_won').reduce((a, b) => a + b.value, 0);

        const getNextStage = (current) => {
          switch (current) {
            case 'prospecting': return 'qualification';
            case 'qualification': return 'proposal';
            case 'proposal': return 'negotiation';
            case 'negotiation': return 'closed_won';
            default: return null;
          }
        };

        return (
          <div className="p-6 space-y-6 max-w-7xl mx-auto animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight font-mono">
                  DEALS PIPELINE & LEAD MANAGEMENT
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Visual stage progression, win probabilities, and weighted conversion forecasting.
                </p>
              </div>
              <button
                onClick={onOpenAddLead}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors self-start md:self-auto"
              >
                <Plus size={16} />
                <span>Track New Deal</span>
              </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider">Total Active Pipeline</span>
                <div className="text-2xl font-extrabold text-slate-900 font-mono mt-1">${"$"}{totalPipeline.toLocaleString()}</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Across unclosed opportunities</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider">Probability-Weighted</span>
                <div className="text-2xl font-extrabold text-indigo-600 font-mono mt-1">${"$"}{Math.round(weightedPipeline).toLocaleString()}</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Expected closing realization</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider">Won Deals Captured</span>
                <div className="text-2xl font-extrabold text-emerald-600 font-mono mt-1">${"$"}{wonRevenue.toLocaleString()}</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Closed won contracts</p>
              </div>
            </div>

            {/* Interactive Kanban Board */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 overflow-x-auto pb-4">
              {STAGES.map((stg) => {
                const stageLeads = filtered.filter((l) => l.stage === stg.key);
                const stageTotal = stageLeads.reduce((a, b) => a + b.value, 0);

                return (
                  <div key={stg.key} className="bg-slate-100/70 rounded-xl p-3 border border-slate-200 flex flex-col min-w-[210px] h-[560px]">
                    {/* Column Header */}
                    <div className="border-b border-slate-200/80 pb-2 mb-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-800 tracking-tight">{stg.label}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center font-mono">
                          {stageLeads.length}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono font-semibold text-slate-500 mt-0.5">${"$"}{stageTotal.toLocaleString()}</div>
                    </div>

                    {/* Deals Cards */}
                    <div className="space-y-2.5 overflow-y-auto flex-1 pr-0.5">
                      {stageLeads.length === 0 ? (
                        <div className="h-28 border border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-[11px] text-center p-2">
                          No active deals in this stage
                        </div>
                      ) : (
                        stageLeads.map((lead) => {
                          const nextStage = getNextStage(lead.stage);
                          return (
                            <div key={lead.id} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2">
                              <div className="flex items-start justify-between gap-1">
                                <h4 className="font-bold text-xs text-slate-900 leading-snug">{lead.companyName}</h4>
                                <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">{lead.probability}%</span>
                              </div>
                              <div className="text-sm font-extrabold font-mono text-slate-900">${"$"}{lead.value.toLocaleString()}</div>
                              <div className="text-[11px] text-slate-500 space-y-0.5">
                                {lead.contactName && <div className="truncate">Contact: {lead.contactName}</div>}
                                <div className="text-[10px] text-slate-400 font-mono">Source: {lead.source}</div>
                              </div>

                              {/* Stage transition controls */}
                              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-1">
                                {nextStage && (
                                  <button
                                    onClick={() => onUpdateLeadStage(lead.id, nextStage)}
                                    className="flex-1 py-1 px-2 text-[10px] font-semibold bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 rounded transition-colors flex items-center justify-center gap-1"
                                  >
                                    <span>Advance</span>
                                    <ChevronRight size={12} />
                                  </button>
                                )}
                                {lead.stage !== 'closed_won' && lead.stage !== 'closed_lost' && (
                                  <button
                                    onClick={() => onUpdateLeadStage(lead.id, 'closed_lost')}
                                    className="py-1 px-1.5 text-[10px] text-rose-600 hover:bg-rose-50 rounded"
                                  >✕</button>
                                )}
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      };

      // Dummy data wrapper
      const App = () => {
        const [leads, setLeads] = React.useState([
          { id: 1, companyName: "Nexus Global", contactName: "Alice Smith", email: "alice@nexus.com", phone: "555-0101", value: 125000, probability: 20, stage: "prospecting", source: "Inbound", lastContact: "2023-10-01", notes: "" },
          { id: 2, companyName: "Quantum Financial", contactName: "Bob Jones", email: "bob@quantum.com", phone: "555-0102", value: 85000, probability: 40, stage: "qualification", source: "Referral", lastContact: "2023-10-02", notes: "" },
          { id: 3, companyName: "Stellar Logistics", contactName: "Charlie Brown", email: "charlie@stellar.com", phone: "555-0103", value: 210000, probability: 60, stage: "proposal", source: "Outbound", lastContact: "2023-10-03", notes: "" },
          { id: 4, companyName: "Vanguard Tech", contactName: "Diana Prince", email: "diana@vanguard.com", phone: "555-0104", value: 450000, probability: 80, stage: "negotiation", source: "Event", lastContact: "2023-10-04", notes: "" },
          { id: 5, companyName: "Apex Innovations", contactName: "Evan Wright", email: "evan@apex.com", phone: "555-0105", value: 320000, probability: 100, stage: "closed_won", source: "Inbound", lastContact: "2023-10-05", notes: "" }
        ]);
        const [searchQuery, setSearchQuery] = React.useState("");

        const handleUpdateStage = (id, newStage) => {
          setLeads(leads.map(l => {
            if (l.id === id) {
              const prob = STAGES.find(s => s.key === newStage)?.prob || 0;
              return { ...l, stage: newStage, probability: prob };
            }
            return l;
          }));
        };

        const handleAddLead = () => {
           alert("Add lead functionality triggered");
        };

        return (
           <div className="h-full bg-white">
               <div className="px-6 pt-4 pb-2 border-b border-slate-200">
                  <input type="text" placeholder="Search deals..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full max-w-sm px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
               </div>
               <LeadsView 
                 leads={leads} 
                 onOpenAddLead={handleAddLead}
                 onUpdateLeadStage={handleUpdateStage}
                 searchQuery={searchQuery}
               />
           </div>
        );
      };

      const rootElement = document.getElementById("crm-root");
      if (rootElement) {
         const root = ReactDOM.createRoot(rootElement);
         root.render(<App />);
      }
    <\/script>
    `;

    html = before + reactRoot + after;
    fs.writeFileSync('Admin_Panel.html', html, 'utf-8');
    console.log('Successfully injected React Kanban into Admin_Panel.html');
} else {
    console.log('Could not find scrollable content area');
}
