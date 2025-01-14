//20-12-2024
//l-5

1st learn 
server set API, implement authentication, login, reg , fgt password, protecting routes





localhost:8000   on browser we get,
 Cannot GET /        it means no endpoint

localhost:8000/api  we get value of log that means server is running






we hv routes controller, hv mngoDB connection. so now we will work on authentication system, create user & log in

to implement that sys, 1st we need to create a model.so we'r going to create a user model & the model will be created based on schema

So whenever u want to save a new user into the DB, prop u want to save r name, email, password, u can wi8 these in schema

here we use use mongoose to create a model
to create model we need to create a schema


cd server

 node server.js to run server


working of cors,... in server file that are injected


Signup to AWS using SES(for emails) & S3(for storage)

This project is at hold because of AWS signup