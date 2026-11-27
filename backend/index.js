if(process.env.NODE_ENV !='production'){
    dotenv.config();
}

import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from 'express'

const  app = express();
import paperRouter from './router/paperroute.js'
import authroute from './router/authroute.js'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

import cookieParser  from 'cookie-parser';


let port =8080;
app.listen(port,()=>{
    console.log(`connection is successfull runnig on port ${port}  `);
});

import mongoose from 'mongoose';
import paper from './models/paper.js';

import User from "./models/user.js"

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://rmlau-papervault-teal.vercel.app"
  ],
  credentials: true
}));

app.use("/uploads", express.static(path.resolve("uploads")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.use("/api/papers", paperRouter);
app.use("/api/auth",authroute);


const dbl = process.env.MONGO_URL;

main().then((res)=>{
    console.log(res)
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbl);

}




// app.get("/del", async(req,res)=>{
//     const del = await  User.deleteMany({});
//     res.send("hello delete")
//     console.log(del)
// });





