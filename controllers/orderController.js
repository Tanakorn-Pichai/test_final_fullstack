const axios = require('axios');
const base_url = "http://localhost:3000";


// 🏠 หน้า Home (แสดงทั้งหมด)
exports.getHome = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/orders');
    res.render("Home", { orders: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};


exports.getOrders = async (req, res) => {
  try {
    // ยิง 2 API พร้อมกัน
    const [ordersRes, detailsRes] = await Promise.all([
      axios.get(base_url + '/orders'),
      axios.get(base_url + '/order-details') // หรือ /bag แล้วแต่ route คุณ
    ]);

    res.render("orders/gets", {
      orders: ordersRes.data,
      orderDetails: detailsRes.data
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};

// 📄 GET ALL
exports.getOrders = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/orders');
    res.render("orders/gets", { orders: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};


// 🔍 GET BY ID
exports.getOrderById = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/orders/' + req.params.id);
    res.render("orders/show", { order: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};


// ➕ FORM CREATE
exports.getCreateForm = (req, res) => {
  res.render("orders/create");
};


// ➕ CREATE
exports.createOrder = async (req, res) => {
  try {
    const { order_date, total_price, quantity, price } = req.body;

    // สร้าง order + order_detail 1 แถว
    const data = {
      order_date,
      total_price,
      order_details: [
        {
          quantity,
          price
        }
      ]
    };

    await axios.post(base_url + '/orders', data);
    res.redirect("/orders");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};


// ✏️ FORM UPDATE
exports.getUpdateForm = async (req, res) => {
  try {
    const response = await axios.get(base_url + '/orders/' + req.params.id);
    res.render("orders/update", { order: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};


// ✏️ UPDATE
exports.updateOrder = async (req, res) => {
  try {
    const { order_date, total_price } = req.body;

    await axios.put(base_url + '/orders/' + req.params.id, {
      order_date,
      total_price
    });

    res.redirect("/orders");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};


// ❌ DELETE
exports.deleteOrder = async (req, res) => {
  try {
    await axios.delete(base_url + '/orders/' + req.params.id);
    res.redirect("/orders");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};