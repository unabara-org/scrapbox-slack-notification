import express from 'express';

const app = express();
const port = 8080;

app.post('/push_to_slack', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
