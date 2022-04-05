//IMPORTACIONES
const { validationResult } = require("express-validator");

//FUNCIONES

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

//EXPORTACION
module.exports = {
  validarCampos,
};
