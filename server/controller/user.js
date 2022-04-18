var _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

module.exports.getAllUser = (req, res) => {
  const sort = req.query.sort == "desc" ? -1 : 1;

  User.find()
    .select(["-_id"])
    .sort({
      id: sort,
    })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => console.log(err));
};

module.exports.getUser = (req, res) => {
  const id = req.params.id;

  User.findOne({
    _id: id,
  })
    .select(["-_id"])
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

module.exports.register = async (req, res) => {
  if (typeof req.body == undefined) {
    res.json({
      status: "error",
      message: "data is undefined",
    });
  } else {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");
    user = new User(_.pick(req.body, ["name", "email", "password", "contact"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    jwt.sign({ _id: user._id }, "privatekey", (err, token) => {
      res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "name", "email", "contact"]));
    });
  }
};

module.exports.login = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not registered.");

  jwt.sign({ _id: user._id }, "privatekey", (err, token) => {
    console.log(token);
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .json({ user, token });
    // .send(_.pick(user, ["_id", "name", "email"]));
  });
};

module.exports.deleteUser = (req, res) => {
  if (req.params.id == null) {
    res.json({
      status: "error",
      message: "User id should be provided",
    });
  } else {
    User.findOne({ id: req.params.id })
      .select(["-_id"])
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  }
};
