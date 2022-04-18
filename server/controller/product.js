const Product = require("../model/product");
const formidable = require("formidable");

module.exports.getAllProducts = (req, res) => {
  const sort = req.query.sort == "desc" ? -1 : 1;

  Product.find()
    // .select(["-_id"])
    .sort({ id: sort })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err));
};

module.exports.getProductsByBuyerId = (req, res) => {
  const id = req.params.id;

  Product.find({
    buyerId: id,
  })
    // .select(["-_id"])
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err));
};

module.exports.getProductsBySellerId = (req, res) => {
  const id = req.params.id;

  Product.find({
    sellerId: id,
  })
    // .select(["-_id"])
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err));
};

module.exports.addProduct = (req, res, next) => {
  console.log(req.file, req.body);
  if (typeof req.body == undefined || !req.body.userId) {
    res.json({
      status: "error",
      message: "data is undefined",
    });
  } else {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      imageUrl: req.file.originalname,
      sellerId: req.body.userId,
    });

    product
      .save()
      .then((product) => res.json(product))
      .catch((err) => console.log(err));
  }
};

module.exports.buyProduct = async (req, res) => {
  if (typeof req.body == undefined || req.params.uid == null) {
    res.json({
      status: "error",
      message: "something went wrong! check your sent data",
    });
  } else {
    const product = await Product.findById({ _id: req.body.productId });
    product.buyerId = req.params.uid;
    product.status = "sold";
    await product.save();
    res.json(product);
  }
};
