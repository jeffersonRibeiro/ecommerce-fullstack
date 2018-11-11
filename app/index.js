import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.send('dsa');
})

app.listen(3000);