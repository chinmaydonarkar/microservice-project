const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/login", (req, res) => {
  // const { username } = req.body;
  if (true) return res.json({ token: "fake-jwt-token" });
  res.status(400).json({ error: "Invalid credentials" });
});

app.listen(4001, () => console.log("Auth Service running on port 4001"));
