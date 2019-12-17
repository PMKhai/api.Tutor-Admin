const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONTRACTS = 'Contracts';
const contract = new Schema ({
    tutor: String,
    student:String,
    status:String,
    payment:String,
    dayOfPayment : Date,
    dayOfHire : Date
},{
    collection : CONTRACTS
});

const list  = mongoose.model(CONTRACTS, contract);

const listContract= async(req,res)=>{
    list.find({}).exec((err,contract)=>{
        if(err){
            console.log('load list that bai');
        }
        else{
            res.json(contract)
        }
    })
}


module.exports = {
    list: list,
    listContract : listContract,
  };

