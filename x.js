const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;
app.use(express.json());
app.get('/numbers', async (req, res) => {
  const { url } = req.query;
  if (!url || !Array.isArray(url)) {
    return res.status(400).json({ error:'Invalid'});
  }
  const validUrls = url.filter((u) => validateUrl(u));
  const promises = validUrls.map(async (u) => {
    try {
      const response = await axios.get(u);
      return response.data.numbers;
    } catch (error) {
      console.error(`Error`);
      return [];
    }
  });
  try {
    const results = await Promise.all(promises);
    const numbers = results
      .flatMap((numArray) => numArray)
      .map(Number);
    const uniqueNumbers = [...new Set(numbers)];
    uniqueNumbers.sort((a, b) => a - b);
    res.json({numbers:uniqueNumbers});
  } catch (error) {
    console.error(`Error`);
    res.status(500).json({ error: 'Internal server error' });
  }
});
function validateUrl(u) {
  try {
    new URL(u);
    return true;
  } catch (error) {
    return false;
  }
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
