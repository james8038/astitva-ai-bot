const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Astitva AI Bot is running 🚀");
});

app.listen(3000, () => console.log("Bot started"));
