const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const USERS = 'Users';
const user = new Schema ({
    email: String,
    password: String,
    isTutor: Boolean,
    isActivated: Boolean,
    isActiveToken: String,
    name: String,
    p_number: String,
    urlAvatar: String,
    address: String,
    overview: String,
    price: String,
    rating:String 
},{
    collection : USERS
});

const list  = mongoose.model(USERS, user);

const listUsers = async(req,res)=>{
    list.find({}).exec((err,user)=>{
        if(err){
            console.log('load list that bai');
        }
        else{
            res.json(user)
        }
    })
}

module.exports = {
    list : list,
    listUsers : listUsers
}