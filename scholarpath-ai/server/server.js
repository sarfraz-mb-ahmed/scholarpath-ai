const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/scholarships', require('./routes/scholarships'));
app.use('/api/sop', require('./routes/sop'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ScholarPath AI API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n  ScholarPath AI server running at http://localhost:${PORT}\n`);
});
