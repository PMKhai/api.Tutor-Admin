const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const REPORT = 'Report';
const report = new Schema ({
    tutor: String,
    student:String,
    description:String,
    vote:Number,
},{
    collection : REPORT
});

const list  = mongoose.model(REPORT, report);

const listReport= async(req,res)=>{
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
    listReport : listReport,
  };
