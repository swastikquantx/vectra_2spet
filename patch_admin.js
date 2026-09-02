const fs = require('fs');
let html = fs.readFileSync('Admin_Panel.html', 'utf-8');

// Replace the React script with a proper admin dashboard
const scriptStart = '<script type="text/babel">';
const scriptEnd = '</script>';

const startIndex = html.indexOf(scriptStart);
const endIndex = html.indexOf(scriptEnd, startIndex);

const newScript = `<script type="text/babel">
      const { useState, useEffect } = React;

      const StatCard = ({ title, value, sub, trend }) => (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">{title}</span>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black font-mono text-slate-900">{value}</span>
            <span className={\`text-[11px] font-bold \${trend > 0 ? 'text-emerald-500' : 'text-rose-500'}\`}>
              {trend > 0 ? '+' : ''}{trend}%
            </span>
          </div>
          <span className="text-xs text-slate-400 mt-2 font-medium">{sub}</span>
        </div>
      );

      const Dashboard = () => {
        return (
          <div className="p-8 max-w-7xl mx-auto space-y-8 bg-zinc-50 min-h-full">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 syne">System Dashboard</h2>
                <p className="text-sm text-slate-500 mt-1">Real-time metrics for Vectra Video Engine.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatCard title="Active Render Jobs" value="1,284" sub="Across 34 nodes" trend={12.5} />
              <StatCard title="GPU Utilization" value="87%" sub="Peak load" trend={4.2} />
              <StatCard title="Total Users" value="45.2k" sub="Registered accounts" trend={2.1} />
              <StatCard title="Avg Render Time" value="14.2s" sub="Per 1080p frame" trend={-1.4} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Active Jobs Table */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-bold text-sm text-slate-800">Recent Render Jobs</h3>
                  <button className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700">View All</button>
                </div>
                <div className="flex-1 overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-slate-50 text-slate-500 font-medium text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="px-5 py-3">Job ID</th>
                        <th className="px-5 py-3">User</th>
                        <th className="px-5 py-3">Status</th>
                        <th className="px-5 py-3">Progress</th>
                        <th className="px-5 py-3">Engine</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {[
                        { id: "RND-9923", user: "john.doe@example.com", status: "Rendering", prog: 65, engine: "Cinematic v4" },
                        { id: "RND-9924", user: "studio_alpha", status: "Queued", prog: 0, engine: "Anime v2" },
                        { id: "RND-9925", user: "marketing_team", status: "Completed", prog: 100, engine: "Cinematic v4" },
                        { id: "RND-9926", user: "creator_xyz", status: "Rendering", prog: 88, engine: "Photoreal v1" },
                        { id: "RND-9927", user: "beta_tester", status: "Failed", prog: 12, engine: "Cinematic v4" }
                      ].map(job => (
                        <tr key={job.id} className="hover:bg-slate-50">
                          <td className="px-5 py-3 font-mono text-xs font-semibold text-slate-900">{job.id}</td>
                          <td className="px-5 py-3">{job.user}</td>
                          <td className="px-5 py-3">
                            <span className={\`px-2.5 py-1 rounded-full text-[10px] font-bold \${
                              job.status === 'Rendering' ? 'bg-blue-100 text-blue-700' :
                              job.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                              job.status === 'Failed' ? 'bg-rose-100 text-rose-700' :
                              'bg-slate-100 text-slate-700'
                            }\`}>{job.status}</span>
                          </td>
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className={\`h-full rounded-full \${job.status === 'Failed' ? 'bg-rose-500' : 'bg-indigo-500'}\`} style={{ width: \`\${job.prog}%\` }}></div>
                              </div>
                              <span className="text-[10px] font-mono">{job.prog}%</span>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-xs">{job.engine}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Node Status */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="px-5 py-4 border-b border-slate-200">
                  <h3 className="font-bold text-sm text-slate-800">GPU Node Health</h3>
                </div>
                <div className="p-5 space-y-4">
                  {[
                    { node: "us-east-1a", type: "NVIDIA H100", load: 92, status: "High" },
                    { node: "us-east-1b", type: "NVIDIA H100", load: 88, status: "High" },
                    { node: "eu-west-1", type: "NVIDIA A100", load: 64, status: "Normal" },
                    { node: "ap-south-1", type: "NVIDIA A100", load: 42, status: "Normal" },
                    { node: "us-west-2", type: "NVIDIA H100", load: 98, status: "Critical" },
                  ].map(n => (
                    <div key={n.node} className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs font-bold text-slate-900">{n.node}</div>
                        <div className="text-[10px] text-slate-500">{n.type}</div>
                      </div>
                      <div className="text-right">
                        <div className={\`font-mono text-sm font-bold \${
                          n.load > 90 ? 'text-rose-600' : n.load > 80 ? 'text-amber-500' : 'text-emerald-600'
                        }\`}>{n.load}%</div>
                        <div className="text-[10px] text-slate-400">{n.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      };

      const rootElement = document.getElementById("crm-root");
      if (rootElement) {
         const root = ReactDOM.createRoot(rootElement);
         root.render(<Dashboard />);
      }
    </script>`;

if (startIndex !== -1 && endIndex !== -1) {
  html = html.substring(0, startIndex) + newScript + html.substring(endIndex + scriptEnd.length);
  fs.writeFileSync('Admin_Panel.html', html, 'utf-8');
  console.log('Admin Dashboard rewritten successfully.');
} else {
  console.log('Could not find script tags.');
}
