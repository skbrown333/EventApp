const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://busk.io:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use("/", routes);

app.listen(3007);
