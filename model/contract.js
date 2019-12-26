const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ISODate = require("isodate");
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
    orderId: String,
    priceTutor:Number,
    priceAdmin:Number
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

const BUDGET = async(res)=>{
    return await list.aggregate( [
        {
          $group: {
              
            _id: null,
             data: { $sum:"$totalMoney" }
          }
        }
      ] ).exec((err,contract)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(contract)
        }
    })
}

const TOTAL = async(res)=>{
    return await list.aggregate( [
        {
          $group: {
              
            _id: null,
             data: { $sum:"$priceAdmin" }
          }
        }
      ] ).exec((err,contract)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(contract)
        }
    })
}




const UpdateStatus = async (id,status,money)=>{
    var tutor = 0
    var admin = 0
    if (status == 'done'){
       console.log(money)
    return await list.findByIdAndUpdate(id,{
        status:status,
        priceTutor : parseInt(money*0.9, 10),
        priceAdmin :  parseInt(money*0.1, 10)
    })
} else {
    return await list.findByIdAndUpdate(id,{
        status:status,
        priceTutor : 0,
        priceAdmin :  0
    })
}
}




module.exports = {
    list: list,
    listContract : listContract,
    UpdateStatus: UpdateStatus,
    BUDGET: BUDGET,
    TOTAL: TOTAL
  };

