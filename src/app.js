import express from 'express';
import { join } from 'path';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});
app.use(express.static(join(__dirname, 'dist_env')));

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
