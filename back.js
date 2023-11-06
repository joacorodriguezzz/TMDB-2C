const { application } = require("express");
const app = express();

app.get("/Login", function (req, res) {
  res.render("/registro");
});
