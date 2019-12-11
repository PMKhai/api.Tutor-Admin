const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SKILL = 'Skills';
const skill = new Schema ({
    name: String,
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

module.exports = {
    list: list,
    listSkill : listSkill,
    newSkill : newSkill
  };
