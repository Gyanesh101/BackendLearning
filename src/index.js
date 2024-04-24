
import connectDB from "./db/indexx.js";
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})
connectDB();














/*const app=express()
(async()=>{
    try{
     mongoose.connect(`$(process.env.MONGODB_URI)/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log(error);
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on 
        port ${process.env.PORT}`);
    })
}
    catch(e){
        console.log("error");
    } 
} )()*/