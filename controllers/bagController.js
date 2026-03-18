const axios = require('axios');
const base_url = "http://localhost:3000";

// GET /
exports.getHome = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/bag');
    res.render("Home", { bag: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};

// GET /bag
exports.getBags = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/bag');
    res.render("bag/getbags", { bag: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};

// GET /bag/:id
exports.getBagById = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/bag/' + req.params.id);
    res.render("bag/getbag", { bag: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};




exports.getCreateForm = (req, res) => {
  res.render("bag/create");
};

exports.createBag = async (req, res) => {
  try {
    await axios.post(base_url + '/bag', req.body);
    res.redirect("/bag");
  } catch (err) {
    res.status(500).send('Error');
  }
};



// 🟡 โหลดข้อมูลมาใส่ form
exports.getUpdateForm = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/bag/' + req.params.id);
    res.render("bag/update", { bag: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};

// 🔵 อัปเดตข้อมูล
exports.updateBag = async (req, res) => {
  try {
    const data = req.body;
    await axios.put(base_url + '/bag/' + req.params.id, data);
    res.redirect("/bag");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};

exports.deleteBag = async (req, res) => {
  try {
    await axios.delete(base_url + '/bag/' + req.params.id);
    res.redirect("/bag");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};