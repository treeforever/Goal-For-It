"use strict";

const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


module.exports = () => {

  router.get('/', (req, res) => {
    res.render('login');
  });

  router.post("/", jsonParser, (req, res) => {
    res.redirect("http://localhost:3000")
    res.send('ok')
    // var username = req.body.username;
    // var email = req.body.email;
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
  });
  return router;
}