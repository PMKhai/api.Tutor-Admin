const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONTRACTS = 'Contracts';
const contract = new Schema ({
    tutor: String,
    student:String,
    status:String,
    payment:String,
    dayOfPayment : Date,
    dayOfHire : Date,
    hourlyPrice:Number,
    weeklyLimit:Number,
    monthlyLimit: Number,
    weeklyBonus:Number,
    totalHour:Number,
    totalMoney:Number,
    isPaid:Number,
    orderId: String
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

const UpdateStatus = async (id,status)=>{
    return await list.findByIdAndUpdate(id,{
        status:status
    })
}


module.exports = {
    list: list,
    listContract : listContract,
    UpdateStatus: UpdateStatus
  };

