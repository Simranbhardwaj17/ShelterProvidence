import express from "express";

const router = express.Router();      //express give this Router fn using that we can implement Routing system

// import { welcome } from "../controllers/auth.js";     //manually import each and every     destructure
import * as auth from "../controllers/auth.js";

//other types of route that we can handle are
//get:- to get data
//post:- to post data from client to server
//put:- for updating
//delete:- to dlt
//create router & see how we can send response
// router.get('/', welcome );    //1st arg of get is url- listen to API, 2nd arg is callbk fn(have access to request & res obj) so express can be called as req & res handler
router.get('/', auth.welcome );

export default router;        //to import in our server