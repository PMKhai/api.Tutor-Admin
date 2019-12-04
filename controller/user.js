var jwt = require ('jsonwebtoken');
var passport = require ('passport');
var User = require('../model/user');


exports.loginUser = (req, res, next) =>{
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          User.getUser(user.email, user.password).then(user => {
            const token = jwt.sign({ id: user.email }, 'your_jwt_secret');
            res.status(200).send({
              auth: true,
              token: token,
              message: 'user found & logged in',
            });
          });
        });
      }
    })(req, res, next);
  }

  exports.registerUser = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        console.log('user found in db from route');
        const data = {
          email: req.body.email,
          password : req.body.password,
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          sex : req.body.sex,
          address : req.body.address,
          phone : req.body.phone,
          identity : req.body.identity,
          
        }
        User.saveUser(data).then( ()=>{
          console.log('user created in db');
          res.status(200).send({ message: 'user created' });
        })
      }
    })(req, res, next);
    
    
  }

  exports.defaultRouter = function(req, res, next) {
    res.send('respond with a resource');
  }

  exports.listUsers =  (req,res,next)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        return  User.listUsers(req,res)

      }
    })(req, res, next);
  }
  

  exports.getUser = function(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        console.log('user found in db from route');
        res.status(200).send({
          user
        });
      }
    })(req, res, next);
  }