//IMPORT
const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
//FUNCTION
const validacionJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "No token in the request",
    });
  }
  try {
    //validarlo
    const { uid } = jwt.verify(token, process.env.SECRETPRIVATEKEY); // VERIFICAR EL JWT

    //leer el usuario que corresponde al uid
    const user = await User.findById(uid);

    if (!user) {
      return res.status(404).json({
        msg: "Token no valid -user do not exists in DB",
      });
    }
    //verificar si el uid tiene stage en true
    if (!user.stage) {
      return res.status(401).json({
        msg: "Token no valid -user with stage false",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token not valid",
    });
  }
};

//EXPORT
module.exports = { validacionJWT };
