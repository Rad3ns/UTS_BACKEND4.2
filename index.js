const express = require('express');
const App = express();
const Route = require('./Route/Route');

App.use("/sampel", Route)
App.listen(3000,()=>{
    console.log("Server Hidup");
});