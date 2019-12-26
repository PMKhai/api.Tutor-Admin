var Contract = require('../model/contract');
var jwt = require ('jsonwebtoken');
var passport = require ('passport');

exports.listContract = (req,res)=>{
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
    })(req, res);
  }

  exports.UpdateStatus = (req,res)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        var id = req.body._id;
        var status  = req.body.status;
        var money = req.body.money
        return  Contract.UpdateStatus(id,status,money)
      }
    })(req, res);
  }

  exports.listSevenDayContract = (req,res)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {

        return  Contract.listSevenDayContract(res)
      }
    })(req, res);
  }