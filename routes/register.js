"use strict";

const express    = require('express');
const router     = express.Router();
const bcrypt     = require('bcrypt-nodejs');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


module.exports = (knex) => {
  router.get('/', (req, res) => {
    res.render('login');
  });

  router.post("/", (req, res) => {
    let { username, password } = req.body;
    console.log(req.body)
    knex.select('username','password','user_id')
      .from('users')
      .where("username", username)
      .then(function(resp) {
        if(resp.length < 1) {
          res.send('fail');
        } else {
          bcrypt.compare(password, resp[0].password, function(err, response) {
            if(response == true) {
              req.session.auth = true;
              req.session.username = resp[0].username;
              req.session.userid = Number(resp[0].user_id);
              res.redirect("http://localhost:3000");
            } else {
              res.send('fail');
            }
          });
      }
    });
  });

    // knex
    //     .select("*")
    //     .from("users")
    //     .where("username", username)
    //     }).then(function(resp) {
    //         if(resp.length < 1) {
    //           res.send('fail');
    //         } else {
    //           bcrypt.compare(password, resp[0].password, function(err, response) {
    //             if(response == true) {
    //               req.session.auth = true;
    //               req.session.username = resp[0].username;
    //               req.session.userid = Number(resp[0].user_id);
    //               res.redirect('/main');
    //             } else {
    //               res.send('fail');
    //             }
    //           });
    //         }
    //       });
    //     });

    // var password = req.body.password;
    // var confirm = req.body.confirm;

    // if(password === confirm && password !== "" && email !== ""){

    //   knex
    //     .select("*")
    //     .from("users")
    //     .where("username", username)
    //     .then((results) => {

    //       if(!results[0]){

    //         knex('users')
    //         .returning('id')
    //         .insert({username: username, email: email, password: password})
    //         .then((results)=> {

    //           res.cookie("userID", results[0]);
    //           res.cookie("username", username)
    //           res.redirect("http://localhost:3000");

    //         });

    //       } else {
    //         res.redirect("/login");
    //       }

    //   });
    // } else {
    //   res.redirect("/login");
    // }
  return router;
}
