import app from "./src/app";
import { config } from "dotenv";
config()

function startServer(){
    const port = process.env.PORT
    app.listen(port,function(){
        console.log(`Server has started at port ${port}`)
    })
}

startServer()