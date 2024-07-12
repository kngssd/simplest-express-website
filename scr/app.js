const express = require("express");
const app = express();

//configure the server

app.get("/", (req, res) => {
  res.send("Here is the root doc response");
});

app.get("/randomJoke", (req, res) => {
  console.log("hi I got /randomJoke req: ");
  const number = randomNumber();
  console.log(number);
  res.send(number + "");
});
//start the server listening

app.listen(3000, () => {
  console.log("your express app started running!");
});

function randomNumber() {
  const n = 1 + Math.floor(Math.random() * 6);
  return n;
}
