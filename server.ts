import app from "./src/app";
import { config } from "dotenv";
config()

//database connection import
// import garena bhane connect hudaina or file execute hudaina
import "./src/database/connection"
function startServer(){
    const port = process.env.PORT
    app.listen(port,function(){
        console.log(`Server has started at port ${port}`)
    })
}

startServer()