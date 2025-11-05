import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL,
}));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server👋" });
});

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log('Express server started on port 5000');
})
