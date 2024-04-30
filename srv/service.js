const cds=require('@sap/cds');
const { query } = require('express');
class demosrv extends cds.ApplicationService{
    async init(){
      const {SalesTerritoryCollection}=this.entities;
      const SaleTer = await cds.connect.to('salesterritory');
      this.on('READ', SalesTerritoryCollection, async(req,res) => {
        return await SaleTer.tx(req).run(req.query);
      });  
    }
}
module.exports={demosrv};