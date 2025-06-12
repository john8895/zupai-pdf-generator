const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const generatePDF = require('./generate');

const app = express();
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
  const data = req.body;
  try {
    const filename = await generatePDF(data);
    res.download(filename);
  } catch (err) {
    console.error(err);
    res.status(500).send('產生 PDF 時發生錯誤');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});