const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

router.post('/generate', async (req, res) => {
  const {
    name, scholarship, country, degree, field,
    currentInstitution, cgpa, workExperience,
    researchInterests, careerGoals, whyScholarship, achievements
  } = req.body;

  const prompt = `You are an expert academic advisor who specialises in helping Pakistani students write compelling Statements of Purpose (SOPs) for international scholarships and university applications.

Write a complete, professional SOP for the following student:

Name: ${name}
Target Scholarship / University: ${scholarship}
Target Country: ${country}
Degree Level: ${degree}
Field of Study: ${field}
Current / Previous Institution: ${currentInstitution}
CGPA / GPA: ${cgpa}
Work Experience: ${workExperience || '0'} years
Research Interests: ${researchInterests}
Career Goals: ${careerGoals}
Why This Scholarship / Country: ${whyScholarship}
Notable Achievements / Awards: ${achievements || 'Not provided'}

Write a complete SOP of 600 to 800 words that:
1. Opens with a specific, compelling moment or observation that sparked the student's passion- avoid cliches like "Since childhood" or generic quotes
2. Articulates academic background, CGPA, and relevant coursework or projects with specificity
3. Explains research interests with intellectual depth and genuine curiosity
4. Connects career goals to the degree and scholarship with clear, logical reasoning
5. Explains convincingly why this particular scholarship and country is the right fit
6. Closes with a confident, forward-looking paragraph about the student's intended contribution

Tone: first person, professional yet genuine. Use flowing paragraphs- no bullet points or headings inside the SOP. Avoid vague filler sentences. Where contextually appropriate, draw on the Pakistani context naturally and without apology. Write in a way that feels human, not AI-generated.`;

  try {
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      // This pulls the key from your hidden .env file
      apiKey: process.env.OPENROUTER_API_KEY, 
    });

    const response = await openai.chat.completions.create({
      model: 'openai/gpt-oss-20b:free',
      messages: [{ role: 'user', content: prompt }]
    });

    // Automatically replaces em dashes with standard hyphens
    const sop = response.choices[0].message.content.replace(/—/g, '-');
    res.json({ success: true, sop });
  } catch (error) {
    console.error('OpenRouter error:', error.message);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to generate SOP. Please check your OpenRouter API key and try again.'
    });
  }
});

module.exports = router;