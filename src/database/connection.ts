
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    database : process.env.DB_NAME ,
    username : process.env.DB_USERNAME ,
    password : process.env.DB_PASSWORD ,
    host : process.env.DB_HOST ,
    dialect : "mysql" ,
    port : Number(process.env.DB_PORT),
    models : [__dirname + '/models'] // current location + '/models'
})


sequelize.authenticate()
.then(()=>{
    console.log("Authenticated, connected")
})
.catch((error)=>{
    console.log(error)
})

//migrate garnu paryo push garnu paryo
sequelize.sync({force:false})
.then(()=>{
    console.log("migrated succesfully new changes")
})


export default sequelize