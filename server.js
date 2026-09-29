const express = require('express');
const app = express();
app.use(express.json());

// Mock Endpoint for Skill Gap Analysis
app.post('/api/analyze-gap', (req, res) => {
    const { studentSkills, targetRole } = req.body;
    console.log(`Analyzing gaps for role: ${targetRole}`);
    // Mocking the engine response matching Slide 8
    res.json({
        role: "Data Analyst",
        gaps: [
            { skill: "Advanced Python", gapStatus: "MEDIUM" },
            { skill: "Portfolio-grade projects", gapStatus: "HIGH" }
        ]
    });
});

app.listen(5000, () => console.log('Tripotic Match Engine running on port 5000'));
