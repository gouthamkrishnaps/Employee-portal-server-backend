//import json server
const jsonServer =  require('json-server')

//create json server
const employeeServer = jsonServer.create()

//create path to json server
const router = jsonServer.router('db.json')

//middleware to convert json to js
const middleware = jsonServer.defaults()

//use middleware and router in server
employeeServer.use(middleware)
employeeServer.use(router)

//setup port for running server
const port = 3000 || process.env.PORT 

//to listern server
employeeServer.listen(port,()=>{
    console.log(`Employee server started at ${port} and waiting for request`);
})