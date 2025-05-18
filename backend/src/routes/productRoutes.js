const express = require("express");
const {
  getDta,
  postData,
  deleteData,
  putData,
} = require("../controllers/productController");
const router = express.Router();

router.get("/getData", getDta);

router.post("/postData", postData);

router.delete("/deleteData", deleteData);

router.put("/putData", putData);

module.exports = router;
