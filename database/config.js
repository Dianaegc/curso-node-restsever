//INSTALACIONES
const mongoose=require('mongoose');



//FUNCIONES

const dbConnection=async()=>{
    try{
        await  mongoose.connect(process.env.MONGODB_CNN,{ // esperar a que se conecte a la base de datos 
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Base de datos online');
    }catch(error){
        throw new Error(`Error a la hora de iniciar la base de datos ->  ${error}`); 
    }
}


//EXPORTACIONES
module.exports={
    dbConnection
}


