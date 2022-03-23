const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
} = require("../controllers/users");
const { esRolValido,emailExiste ,existeUsuarioPorId} = require("../helpers/db-validators");
const router = Router();

router.get("/", usersGet); //solo estoy mandando la referencia del usersGet
router.put("/:id", [
  check('id','Its not a valid ID').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
],usersPut);

router.post(
  "/",
  [
    check("nombre", "The name is required").not().isEmpty(),
    check("password", "The password must be longer than 6 letters").isLength({
      min: 6,
    }),
    check("email", "The email is not valid").isEmail(),
    check('email').custom(emailExiste),
    //  check("rol", 'Its not a valid role').isIn(['ADMIN_ROLE','USER_ROLE']),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usersPost
);
router.patch("/", usersPatch);
router.delete("/", usersDelete);

//EXPORTACION
module.exports = router;
