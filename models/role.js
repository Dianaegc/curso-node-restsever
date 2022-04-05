//IMPORTACIONES
const {Schema,model}=require('mongoose');


//FUNCIONES
const RoleSchema=Schema({
    rol:{
        type:String,
        required:[true,'The role is neccesary']
    }
});

//EXPORTACION
module.exports=model('Role',RoleSchema);