const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const mockDatabase = {
  roles: ["Data Analyst", "ML Engineer", "Product Analyst"],
  learningResources: [
    { type: "COURSE", name: "SQL, Statistics & Advanced Visualization Tracking" },
    { type: "PROJECT", name: "Exploratory Data Analysis (EDA) on open-source repositories" }
  ],
  opportunities: [
    { type: "INTERNSHIP", position: "Summer Data Analyst Core Team", duration: "8-12 weeks" },
    { type: "JOB", position: "Junior Data Analyst Entry Level", entryStatus: "Active" }
  ]
};

app.post('/api/v1/analyze-profile', (req, res) => {
  const { education, skills, interests } = req.body;
  if (!education) {
    return res.status(400).json({ error: "Missing essential student profiling array parameters." });
  }
  
  res.json({
    status: "SUCCESS",
    matchedVectors: [
      { role: "Data Analyst", matchConfidence: 0.94 },
      { role: "ML Engineer", matchConfidence: 0.78 },
      { role: "Product Analyst", matchConfidence: 0.65 }
    ]
  });
});

app.post('/api/v1/generate-roadmap', (req, res) => {
  const { targetRole, verifiedSkills } = req.body;
  
  res.json({
    targetRole: targetRole || "Data Analyst",
    extractedGaps: [
      { required: "Advanced Python", status: "MEDIUM" },
      { required: "Stakeholder Communications", status: "MEDIUM" },
      { required: "Portfolio-grade projects", status: "HIGH" }
    ],
    executionPlan: {
      milestones: [
        { phase: 1, block: "Foundation Core", actions: ["SQL Fundamentals", "Statistics Baseline"] },
        { phase: 2, block: "Targeted Upskilling", actions: ["Advanced SQL window functions Optimization"] },
        { phase: 3, block: "Portfolio Engineering", actions: ["2-week EDA project deployment"] },
        { phase: 4, block: "Market Entry Loop", actions: ["8-12 weeks Internship routing"] }
      ]
    }
  });
});

app.post('/api/v1/assistant/query', (req, res) => {
  const { userPrompt, conversationContext } = req.body;
  
  if (userPrompt && userPrompt.toLowerCase().includes("what should i learn next")) {
    return res.json({
      aiResponse: "Based on your verified target path as a Data Analyst, focus on mastering advanced SQL window functions and building one portfolio-grade analytics repository next."
    });
  }

  res.json({
    aiResponse: "Context received. Please continue updating your skill profile matrices to adjust your career tracking parameters."
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Tripotic Core Orchestration Engine initialized securely on deployment port ${PORT}`));
