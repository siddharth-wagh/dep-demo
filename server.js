import express from 'express';

const app = express();
const PORT =  3005;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
