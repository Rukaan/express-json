const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
