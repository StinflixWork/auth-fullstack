import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL,
}));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server👋" });
});

app.listen(PORT, () => {
  console.log('Express server started on port 5000');
})
