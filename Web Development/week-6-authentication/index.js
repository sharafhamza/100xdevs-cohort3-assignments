const express = require("express");

const app = express();

app.use(express.json());

const users = [];
const generateToken = () => {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let token = "";
  for (let i = 0; i < 30; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
};
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

app.post("signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //   let foundUser = null;

  //   for (let i = 0; i < users.length; i++) {
  //     if (users.username == username && users.password == password) {
  //       foundUser = users[i];
  //     }
  //   }
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = generateToken();
    users.token = token;
    res.send({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.listen(3000);
