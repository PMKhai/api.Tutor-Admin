var Contract = require('../model/contract');
var jwt = require ('jsonwebtoken');
var passport = require ('passport');

exports.listContract = (req,res,next)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        return  Contract.listContract(req,res)
      }
    })(req, res, next);
  }