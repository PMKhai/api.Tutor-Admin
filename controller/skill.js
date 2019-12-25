var Skill = require('../model/skill');
var jwt = require ('jsonwebtoken');
var passport = require ('passport');

exports.listSkill =  (req,res,next)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        return  Skill.listSkill(req,res)
      }
    })(req, res, next);
  }


exports.NewSkill = (req,res,next)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        const data = {
            name: req.body.name,
            imgUrl: "",
            description : req.body.description
        }
        Skill.newSkill(data).then(()=>{
            console.log('new skill created in db');
            res.status(200).send({ message: 'skill created' });
        })
      }
    })(req, res, next);
  }
  
  exports.deleteSkill = (req,res,next)=>{
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err|| !user ) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        var name = req.body.name;
      return Skill.deleteSkill(name)

      }
    })(req, res, next);
  }