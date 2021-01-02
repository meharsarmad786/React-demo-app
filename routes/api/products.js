const express = require("express");
let router = express.Router();
var Product = require("../../models/product");
//get products
router.get("/", async (req, res) => {
  let products = await Product.find();
  return res.send(products);
});
//get single products
// router.get("/:id", async (req, res) => {
//   try {
//     let product = await Product.findById(req.params.id);
//     if (!product)
//       return res.status(400).send("Product With given ID is not present"); //when id is not present id db
//     return res.send(product); //everything is ok
//   } catch (err) {
//     return res.status(400).send("Invalid ID"); // format of id is not correct
//   }
// });

//Insert a record
router.post("/add", async (req, res) => {
  let product = new Product();
  product.prName = req.body.prName;
  product.prCategory = req.body.prCategory;
  product.prPrice = req.body.prPrice;
  product.prDetails = req.body.prDetails;
  product.prImage = req.body.perImage;
  await product.save();
  return res.send(product);
});
module.exports = router;
