const express = require("express");
const cors = require("cors")


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Order placed successfully" });
});

app.listen(4002, () => console.log("Order Service running on port 4002"));
