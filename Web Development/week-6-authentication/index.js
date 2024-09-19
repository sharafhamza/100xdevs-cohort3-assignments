const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Hellohamza";
app.use(express.json());
const users = [];

const auth = (req, res, next) => {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }
};

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

app.get("/me", function(req, res)) {
  const token = req.headers.token // jwt
  const decodedInformation = jwt.verify(token, JWT_SECRET);  // {username: "harkirat@gmail.com"}
  const unAuthDecodedinfo = jwt.decode(token,);  // {username: "harkirat@gmail.com"}
  const username = decodedInformation.username
  let foundUser = null;
}

app.listen(4000);
