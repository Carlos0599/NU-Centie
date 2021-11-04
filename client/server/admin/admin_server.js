const pool = require("../config/database.js");
const router = require("express").Router();

router.get("/api/getUsers", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected as id ${connection.threadId}");

    connection.query("SELECT * FROM users", (err, rows) => {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

module.exports = router;
