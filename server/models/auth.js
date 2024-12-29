import {model, Schema, ObjecId} from "mongoose";      //destructure model, schema

//create new instance of schema
const schema = new Schema({
    //here u can define schema for user model(prop that u want for new user)
    username: {         //props
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        default: ""
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        maxLength: 256
    },
    address: { type: String, default: ""},
    company: { type: String, default: ""},
    phone: { type: String, default: ""},
    photo: {},  //we don't specify it can hold any type of data as we r getting response from aws
    role: {
        type: [String],
        default: ["Buyer"],
        enum: ["Buyer", "Seller", "Admin"],   //one of these
    },
    enquiredProperties: [{    //when user login to dashboard we can show previously inquired prop

    }]   
})

export default model("User", schema)   //user model based on schema u wi8
//think it as table in DB
//export it as user model, interact with user ,update, dlt

//in that way we can create schema & export as model ,so that we can use it to interact with DB
