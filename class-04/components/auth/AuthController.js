var authModel = require("./AuthModel");
var bycrypt = require("bcryptjs")
var jwt = require("jsonwebtoken");

module.exports.signup = async(req, res) => {
  console.log("req body", req.body);
  const { name, createdAt, email, password } = req.body;

  if (!name || !createdAt || !email || !password) {
    res.status(400).send("All params are required");
  }

  const user = await authModel.findOne({ email: email });

  if(user){
    res.status(400).send("user email already exist");
  }

  const encryptedPassword = await bycrypt.hash(password, 10);
  
  console.log("encryptedPassword", encryptedPassword)

  const newUser = new authModel({
    name,
    createdAt,
    email,
    password: encryptedPassword,
  });
  newUser.save((err, success) => {
    //token create?
    console.log("success", success);
    console.log("err", err);
    if (err) {
      res.status(501).send("err happen");
    }
    res.status(200).send("user has been registered");
  });
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("All params are required");
  }


  const user = await authModel.findOne({ email: email });
  console.log("user", user);
  if (!user) {
    res.status(401).send("user email not found");
  } else if (!await bycrypt.compare(password, user.password)) {
    res.status(401).send("Your password is not correct");
  }
  var token = await jwt.sign(
    { email: user.email, name: user.name },
    process.env.jwtKey
  );
  console.log("token", token);
  let userRecord = {
    email: user.email,
    name: user.name,
    token,
  };
  res.status(200).json(userRecord);
};
