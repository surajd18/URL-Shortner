import dotenv from "dotenv";

dotenv.config({
    path:"./env"
})

import express from "express";
const app = express();
import urlRoute from './routes/url.route.js'
import connectDB from './server/connection.js'


connectDB()
.then(()=>{
    app.get('/',(req,res)=>{
        res.send(`<center><h1>Server is live!!🟢</h1></center>`);
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONOGDB connection failed...",err)
})

app.use(express.json())
app.use("/url",urlRoute)

