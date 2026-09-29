import React, { useState } from 'react';

// Core Frontend UI reflecting the 7-Step Hackathon Workflow Simulation
function App() {
  const [studentProfile, setStudentProfile] = useState({
    name: "Aanya",
    course: "B.Tech CS",
    skills: ["Python", "SQL", "Basic ML"],
    interests: ["Data", "Product Impact"],
    goal: "Analyst role in tech"
  });

  const [selectedPath, setSelectedPath] = useState("Data Analyst");
  
  // Hardcoded blueprint metrics directly from slide 8 data
  const skillGaps = [
    { name: "Advanced Python", current: "Basic Python", status: "MEDIUM" },
    { name: "Stakeholder Comms", current: "Casual Writing", status: "MEDIUM" },
    { name: "Portfolio-grade projects", current: "Coursework projects", status: "HIGH" }
  ];

  const roadmapPhases = [
    { phase: "Phase 1", title: "Foundation", focus: "SQL, Statistics, Visualization" },
    { phase: "Phase 2", title: "Skill Build", focus: "Advanced SQL window functions" },
    { phase: "Phase 3", title: "Projects", focus: "EDA on open dataset (2 weeks)" },
    { phase: "Phase 4", title: "Portfolio & Apply", focus: "Summer analyst applications (8-12 weeks)" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9fb', color: '#111' }}>
      <header style={{ borderBottom: '2px solid #6366f1', paddingBottom: '10px' }}>
        <h2>Tripotic: AI-Powered Career Readiness Platform</h2>
        <p><strong>Candidate Profile:</strong> {studentProfile.name} • {studentProfile.course}</p>
      </header>

      <main style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Step 03: Career Direction Vector */}
        <section style={{ flex: 1, padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3>Selected Path: {selectedPath}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button style={{ padding: '10px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '4px' }}>Vector A: Data Analyst</button>
            <button style={{ padding: '10px', background: '#e0e7ff', color: '#4f46e5', border: 'none', borderRadius: '4px' }}>Vector B: ML Engineer</button>
            <button style={{ padding: '10px', background: '#e0e7ff', color: '#4f46e5', border: 'none', borderRadius: '4px' }}>Vector C: Product Analyst</button>
          </div>
        </section>

        {/* Step 04: Intelligent Skill Gap Extraction Engine */}
        <section style={{ flex: 1, padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3>Identified Skill Gaps</h3>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <th>Required Skill</th>
                <th>Current Status</th>
                <th>Gap Weight</th>
              </tr>
            </thead>
            <tbody>
              {skillGaps.map((gap, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '8px 0' }}>{gap.name}</td>
                  <td>{gap.current}</td>
                  <td>
                    <span style={{ padding: '2px 6px', borderRadius: '4px', fontSize: '12px', background: gap.status === 'HIGH' ? '#fee2e2' : '#ffedd5', color: gap.status === 'HIGH' ? '#ef4444' : '#f97316' }}>
                      {gap.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {/* Step 05: Dynamic Milestone Compilation */}
      <section style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h3>Actionable Roadmap Execution Stack</h3>
        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          {roadmapPhases.map((phase, idx) => (
            <div key={idx} style={{ flex: 1, borderLeft: '4px solid #4f46e5', paddingLeft: '10px', background: '#f8fafc' }}>
              <h4>{phase.phase}: {phase.title}</h4>
              <p style={{ fontSize: '14px', color: '#475569' }}>{phase.focus}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
