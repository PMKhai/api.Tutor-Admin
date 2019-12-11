const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const saltRounds = 10;
const USERS = 'UserAdmin';
const user = new Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    sex: String,
    address: String,
    phone: String,
    identity: String,
  },
  { collection: USERS }
);
const list = mongoose.model(USERS, user);

const getUser = async (email) => {
    return await list.findOne({ 'email': email });
};

const findUserById = async (id) => {
  return await list.findOne({ email: id });
};

const saveUser = async (newuser) => {
  const NewUser = new list(newuser);
  bcrypt.hash(newuser.password, saltRounds, function (err, hash) {
    NewUser.password = hash;
    NewUser.save((err) => {});
})
};
const validPassword = async (email, password) => {
    const user = await getUser(email);
    if (!user)
        return false;
    else {
        if (user.active == false) {
            return false
        }
        return await bcrypt.compare(password, user.password);
    }
};
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

const getUserByEmail = async (req,res)=>{
  list.findOne({ 'email': req.body.email }).exec((err,user)=>{
    if (err){
      console.log('load user by email false');
    } else {
      res.json(user)
    }
  });
}



module.exports = {
  list: list,
  getUser: getUser,
  findUserById: findUserById,
  saveUser: saveUser,
  validPassword : validPassword,
  listUsers: listUsers,
  getUserByEmail: getUserByEmail
};
