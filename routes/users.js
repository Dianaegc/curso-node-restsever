 const{Router}=require('express');
 const {check}=require('express-validator');
 const Role=require('../models/role');
 const{usersGet, usersPut, usersPost, usersDelete, usersPatch}=require('../controllers/users');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste,existeUsuarioPorId } = require('../helpers/db-validators');
 const router=Router();

 router.get("/", usersGet);//solo estoy mandando la referencia del usersGet
  router.put("/:id",[
    check('id','It is not a valid ID').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
  ], usersPut);



  
    router.post("/",[
      check ('name','Name is required').not().isEmpty(),
      check ('email').custom(emailExiste),
      check ('password','Password has to be more than 6 words').isLength({min:6}),
      //check ('rol','No permition with this role').isIn(['ADMIN_ROLE','USER_ROLE']),
      check('rol').custom(esRolValido),
      validarCampos
    ],usersPost);




    router.patch("/",usersPatch);
    router.delete("/", usersDelete);
 //EXPORTACION
 module.exports=router;