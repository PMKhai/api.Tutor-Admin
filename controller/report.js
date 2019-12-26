var Report = require('../model/report');
var jwt = require ('jsonwebtoken');
var passport = require ('passport');

exports.listReport =  (req,res,next)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        return  Report.listReport(req,res)
      }
    })(req, res, next);
  }