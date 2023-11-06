const jwt = require("jsonwebtoken");

const SECRET = "secretPassword";

function sign(data) {
  const token = jwt.sign(data, SECRET, { expiresIn: "2h" });
  console.log("TOKEN", token);
  return token;
}
