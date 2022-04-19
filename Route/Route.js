const {Router} = require("express");
const {AmbilModel} = require("../Controller/Cotroller");
const route =  Router();
route.get("/",(req,res)=>{
    AmbilModel(req,res);
});
module.exports = route;