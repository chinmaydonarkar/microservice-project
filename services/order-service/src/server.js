const express = require("express");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  res.json({ message: "Order placed successfully" });
});

app.listen(4002, () => console.log("Order Service running on port 4002"));
