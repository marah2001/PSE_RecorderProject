const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Agile Task Manager API! Sprint 1 is Successful.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});