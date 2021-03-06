const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SKILL = 'Skills';
const skill = new Schema ({
    name: String,
    description : String,
    imgUrl:String
},{
    collection : SKILL
});

const list  = mongoose.model(SKILL, skill);

const listSkill = async(req,res)=>{
    list.find({}).exec((err,skill)=>{
        if(err){
            console.log('load list that bai');
        }
        else{
            res.json(skill)
        }
    })
}
const newSkill = async (newskill) => {
    const NewSkill = new list(newskill);
    NewSkill.save((err) => {});
}


const deleteSkill = async(name)=>{
    return await list.findOneAndDelete({name:name})
}
module.exports = {
    list: list,
    listSkill : listSkill,
    newSkill : newSkill,
    deleteSkill: deleteSkill
  };
