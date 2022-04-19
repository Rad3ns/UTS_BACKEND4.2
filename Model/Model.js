const {readFileSync} = require('fs');
const AmbilModelData = async() => {
    const data = await readFileSync("Model/ModelData.json","utf8");
    return JSON.parse(data);
}

module.exports = {AmbilModelData};