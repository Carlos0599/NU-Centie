const pool = require("../config/database.js");
const router = require("express").Router();
//users
router.get("/api/getUsers", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query("SELECT * FROM users WHERE user_isArchived	= 'False'", (err, rows) => {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

//archived users
router.put("/api/user/archived", (req, res) => {
  const user_id = req.body.user_id;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query("UPDATE users SET user_isArchived	= true WHERE user_id = ?", user_id, (err, result) => {
      connection.release();

      if (!err) {
        res.send(result);
      } else {
        console.log(err);
      }
    });
  });
});


//update users
router.put("/api/user/update", (req, res) => {
  const user_id = req.body.user_id;
  const user_fname = req.body.user_fname;
  const user_lname = req.body.user_lname;
  const user_address = req.body.user_address;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query("UPDATE users SET user_fname = ? , user_lname = ? , user_address = ? WHERE user_id = ?",
      [user_fname, user_lname, user_address, user_id],
      (err, result) => {
        connection.release();

        if (!err) {
          res.send(result);
        } else {
          console.log(err);
        }
      });
  });
});



// products
router.get("/api/getProducts", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM products WHERE product_isArchived = 'False'", (err, rows) => {
      connection.release();

      if (!err) {
        // console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

//archived products
router.put("/api/products/archived", (req, res) => {
  const product_id = req.body.product_id;

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query("UPDATE products SET product_isArchived	= 'True' WHERE product_id = ?", product_id, (err, result) => {
      connection.release();

      if (!err) {
        res.sendStatus(200).send(result);
      } else {
        console.log(err);
      }
    });
  });
});


// orders
router.get("/api/getOrders", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM order_details JOIN orders ON order_details.order_id = orders.order_id JOIN users ON orders.user_id = users.user_id", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// souvenirs
router.get("/api/getSouvenirs", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM souvenir WHERE souvenir_isArchived	= 'False'", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// book
router.get("/api/getBook", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM book WHERE book_isArchived = 'False' ", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});



// Innovations
router.get("/api/getInnovations", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM innovation WHERE 	innovation_isArchived = 'False'", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});



// Innovators
router.get("/api/getInnovators", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM innovators WHERE innovator_isArchived = 'False'", (err, result) => {
      connection.release();
      if (err == null) {
        res.send(result);
      } else {
        console.log(err);
      }
    });
  });
});

// Payment
router.get("/api/getPayments", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM payment", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});



// Investment
router.get("/api/getInvestment", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM invest_transaction", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


// Exhibit
router.get("/api/getExhibit", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    // console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM exhibit WHERE isArchived = 'False'", (err, rows) => {
      connection.release();

      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});


module.exports = router;
