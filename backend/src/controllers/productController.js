const pool = require("../config/db");
const Products = require("../models/product");

exports.getData = (req, res) => {
  Products.fetchData().then((data) => {
    res.send(data);
  });
};

exports.postData = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      pool.execute(
        'INSERT into products (id, productname, price) values(5,"New Product",200) ',
        (error, data) => {
          if (error) {
            res.status(500).send(error.sqlMessage);
          } else {
            res.status(201).send(data);
          }
        }
      );
    }
  });
};

exports.deleteData = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      res.status(500).send(error);
    } else {
      pool.execute("DELETE from products WHERE id=5", (err, data) => {
        if (err) {
          res.status(500).send(err.sqlMessage);
        } else {
          res.status(200).send(data);
        }
      });
    }
  });
};

exports.putData = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      res.status(500).send(error);
    } else {
      pool.execute(
        'UPDATE products SET productname="Pineapple", price=20 WHERE id=4',
        (err, data) => {
          if (err) {
            res.status(500).send(err.sqlMessage);
          } else {
            res.status(200).send(data);
          }
        }
      );
    }
  });
};
