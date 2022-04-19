const {AmbilModelData} = require('../Model/Model');
const AmbilModel = async(req,res) => {
    const data = await AmbilModelData();
    res.json({ModelData: data});
};

module.exports =  {AmbilModel};