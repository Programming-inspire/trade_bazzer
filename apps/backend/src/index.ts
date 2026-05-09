import express from "express";

const app = express();

app.use(express.json());
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Trade Bazzer API is running");
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});