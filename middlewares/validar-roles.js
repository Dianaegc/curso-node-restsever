//IMPORT
const { response } = require("express");
//FUNCTIONS
const adminRole = (req, res = response, next) => {
  //validar para asegurarnos que estamos  llamando correcto al admin rol
  if (!req.user) {
    return res.status(500).json({
      msg: "Verify the role without the validation of the token",
    });
  }

  const { rol, name } = req.user;
  if (rol !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${name} is not admin`,
    });
  }

  next();
};

const tieneRole = (...roles) => {
  return (req, res = response, next) => {
    if (!req.user) {
      return res.status(500).json({
        msg: "Verify the role without the validation of the token",
      });
    }
    if (!roles.includes(req.user.rol)) {
      return res.status(401).json({
        msg: `The server requires one of this roles ${roles}`,
      });
    }

    next();
  };
};

//EXPORT
module.exports = {
  adminRole,
  tieneRole,
};
