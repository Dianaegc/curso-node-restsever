//IMPORTACIONES
const bcryptjs = require('bcryptjs');
const {response}=require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const User=require('../models/user');
//FUNCIONES

const login=async(req,res=response)=>{
    const{email,password}=req.body;
    try{


            //Verificar si el email existe
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                msg:'User/Password incorrect'
            });
        }
            //Verificar si el usuario esta activo en mi base de datos
    
            if(!user.stage){
                return res.status(400).json({
                    msg:'User/Password incorrect -stage:false'
                });
            }
            //Verificar el password
            const validPassword=bcryptjs.compareSync(password,user.password);
            if(!validPassword){
                return res.status(400).json({
                    msg:'User/Password incorrect -password'
                });
            }
            //Generar el JWT
            //npm install  jsonwebtoken 
            const token= await generarJWT (user.id);

        res.json({
           user,
           token
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:'Something went wrong'
        })
    }





res.json({
    msg:'login',
 
})
}

//EXPORTACIONES
module.exports={
    login
};
