const { areaNegocio } = require("../db/area_negocio.model");
const { ciudad } = require("../db/ciudad.model");
const { pais } = require("../db/pais.model");
const { tipoEmpresa } = require("../db/tipo_empresa.model");

class MetadataData{
    constructor(){

    }

    obtener(){
        return new Promise(async (resolve,reject)=>{
            let metadata = {
                areas_negocio : await areaNegocio.findAll(),
                tipos_empresa: await tipoEmpresa.findAll(),
                paises: await pais.findAll({include: ciudad}) 
            }
            resolve(metadata);
        });
    }
}

const metadataData = new MetadataData();

module.exports = metadataData;