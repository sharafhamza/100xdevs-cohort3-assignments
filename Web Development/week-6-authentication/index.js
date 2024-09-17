const express = require("express");

const app = express();
var jwt = require("jsonwebtoken");
app.use(express.json());

const users = [];
const JWT_SECRET = "USER_APP";

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.send({
    message: "You have signed up",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // maps and filter
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
      },
      JWT_SECRET
    );
    res.send({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.authorization;
  const userDetails = jwt.verify(token, JWT_SECRET);

  const username = userDetails.username;
  const user = users.find((user) => user.username === username);

  if (user) {
    res.send({
      username: user.username,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});
app.listen(3000);
