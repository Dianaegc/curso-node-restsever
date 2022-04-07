const validaCampos = require("../middlewares/validar-campos");
const validacionJWT = require("../middlewares/validar-jwt");
const validaRoles = require("../middlewares/validar-roles");

module.exports = {
  ...validaCampos,
  ...validacionJWT,
  ...validaRoles,
};
