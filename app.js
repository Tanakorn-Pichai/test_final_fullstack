const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

const base_url = "http://localhost:3000";

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));



app.get("/", async (req, res) => {
  try {
    const response = await axios.get(base_url + '/bag');
    res.render("Home", { bag: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});

app.get("/bag", async (req, res) => {
  try {
    const response = await axios.get(base_url + '/bag');
    res.render("bag/getbags", { bag: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});

app.listen(5500, () => {
  console.log('Server started on port http://localhost:5500');
});
