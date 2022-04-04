 const{Router}=require('express');
 const{usersGet, usersPut, usersPost, usersDelete, usersPatch}=require('../controllers/users')
 const router=Router();

 router.get("/", usersGet);//solo estoy mandando la referencia del usersGet
  router.put("/:id", usersPut);
    router.post("/",usersPost);
    router.patch("/",usersPatch);
    router.delete("/", usersDelete);

 //EXPORTACION
 module.exports=router;