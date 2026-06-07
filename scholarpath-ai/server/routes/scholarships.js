const express = require('express');
const router = express.Router();
const scholarships = require('../data/scholarships');

// IMPORTANT: /meta/filters must be defined before /:id
router.get('/meta/filters', (req, res) => {
  const countries = [...new Set(scholarships.map(s => s.country))].sort();
  const levels = ['Bachelors', 'Masters', 'PhD'];
  const fundingTypes = [...new Set(scholarships.map(s => s.fundingType))].sort();
  res.json({ success: true, data: { countries, levels, fundingTypes } });
});

router.get('/', (req, res) => {
  let results = [...scholarships];
  const { search, country, level, fundingType } = req.query;

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.country.toLowerCase().includes(q) ||
      s.fields.some(f => f.toLowerCase().includes(q)) ||
      s.description.toLowerCase().includes(q)
    );
  }

  if (country && country !== 'All') {
    results = results.filter(s => s.country === country);
  }

  if (level && level !== 'All') {
    results = results.filter(s => s.level.includes(level));
  }

  if (fundingType && fundingType !== 'All') {
    results = results.filter(s => s.fundingType === fundingType);
  }

  res.json({ success: true, count: results.length, data: results });
});

router.get('/:id', (req, res) => {
  const scholarship = scholarships.find(s => s.id === req.params.id);
  if (!scholarship) {
    return res.status(404).json({ success: false, message: 'Scholarship not found' });
  }
  res.json({ success: true, data: scholarship });
});

module.exports = router;
