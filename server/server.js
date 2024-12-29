import express from "express";
import morgan from "morgan"; 
import cors from "cors";  // At this moment we will test our API with postman, later when we hv react client it will be req
import mongoose from "mongoose"; // to connect to mongoDB
import { DATABASE } from "./config.js";            //also give js path coz of type: module in json file
import authRoutes from './routes/auth.js';

const app = express()      //app var & express get invoked it means all fnality of exp is available in app var

//db connection
mongoose
  .connect(DATABASE)
  .then(() => console.log("db_connected"))
  .catch((err) => console.log(err));
  

//apply middlewares to express, use fn "use()"
app.use(express.json());  //when we make post req from client to server sending some data for login like userEmail & password & that data will be saved in server when we have this middleware else u see undef
app.use(morgan("dev"));  //development
app.use(cors());

//apply routes as middleware here(use fn "use()")    
app.use("/api", authRoutes);   //give path as we are building API so every route will be prefixed with /api so wi8 here instead of using in every route

//for this app to run we hv to listen port
app.listen(8000, () => console.log("server_runnimg_on_port_8000"));     //In callbk fn if don't want to ret then remove {}

//try making req using above api
