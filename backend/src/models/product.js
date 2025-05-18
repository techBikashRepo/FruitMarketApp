const pool = require("../config/db");

module.exports = class Products {
  static fetchData() {
    return pool.execute("Select * from products");
  }
};
