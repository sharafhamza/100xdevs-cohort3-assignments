const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Hellohamza";
app.use(express.json());
const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });
  res.send({
    message: "You have Signed Up",
  });
  console.log(users);
});

app.listen(3000);
