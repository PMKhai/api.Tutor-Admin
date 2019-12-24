const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const USERS = 'Users';
const ObjectID = require('mongodb').ObjectID;

const user = new Schema({
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
    price: Number,
    rating: Number
}, {
    collection: USERS
});

const list = mongoose.model(USERS, user);

const listUsers = async (req, res) => {
    list.find({}).exec((err, user) => {
        if (err) {
            console.log('load list that bai');
        }
        else {
            res.json(user)
            
        }
    })
}

const updateUser = async (values, email) => {
    return await list.findOneAndUpdate({email:email}, {$set:{
        isTutor: values.isTutor,
        isActivated: values.isActivated,
        isActiveToken: values.isActiveToken,
        name: values.name,
        p_number: values.p_number,
        urlAvatar: values.urlAvatar,
        address: values.address,
        overview: values.overview,
        price: values.price,
        rating: values.rating
    }});
}


const getUser = async (res, id) => {
    return await list.findById(id).then(foundUser => {
        if (!foundUser) {
            return "false"
        }
        res.json({
            _id : foundUser._id,
            email: foundUser.email,
            isTutor: foundUser.isTutor,
            isActivated: foundUser.isActivated,
            isActiveToken: foundUser.isActiveToken,
            name: foundUser.name,
            p_number: foundUser.p_number,
            urlAvatar: foundUser.urlAvatar,
            address: foundUser.address,
            overview: foundUser.overview,
            price: foundUser.price,
            rating: foundUser.rating
        })
    })
}

const deleteUser = async(email)=>{
    return await list.findOneAndDelete({email:email})
}

module.exports = {
    list: list,
    listUsers: listUsers,
    updateUser: updateUser,
    getUser: getUser,
    deleteUser:deleteUser
}