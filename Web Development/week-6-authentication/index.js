const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Hellohamza";
app.use(express.json());
const users = [];
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  users.push({
    username,
    email,
    password,
  });
  res.send({
    message: "You have Signed Up",
  });
  console.log(users);
});

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  let findUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      findUser = users[i];
    }
  }
  console.log(findUser);

  if (findUser) {
    const token = jwt.sign(
      {
        username: users.username,
        password: username.password,
      },
      JWT_SECRET
    );
    res.send({
      token: token,
    });
  } else {
    res.send({
      message: "User isn't found",
    });
  }
});

app.listen(4000);
