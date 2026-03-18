const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

// import routes
const bagRoutes = require('./routes/bagRoutes');

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

// ใช้ routes
app.use('/', bagRoutes);


app.listen(5500, () => {
  console.log('Server started on port http://localhost:5500');
});














