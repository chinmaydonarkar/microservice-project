const express = require("express");

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { username } = req.body;
  if (username) return res.json({ token: "fake-jwt-token" });
  res.status(400).json({ error: "Invalid credentials" });
});

app.listen(4001, () => console.log("Auth Service running on port 4001"));
