const express = require("express");
const axios = require("axios");
const cors = require("cors")
const rateLimiter = require("./rateLimiter");

const app = express();
app.use(express.json());

// Apply rate limiting
app.use(rateLimiter);
app.use(cors());

// Routes forwarding
app.use("/auth", (req, res) => forwardRequest("http://auth-service:4001", req, res));
app.use("/orders", (req, res) => forwardRequest("http://order-service:4002", req, res));

// Forwarding function
async function forwardRequest(url, req, res) {
  try {
    const { host, ...headers } = req.headers;
    const response = await axios({
      method: req.method,
      url: `${url}${req.path}`,
      data: req.body,
      headers,
    });    
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: "Service unavailable" });
  }
}

app.listen(8000, () => console.log("API Gateway running on port 8000"));
