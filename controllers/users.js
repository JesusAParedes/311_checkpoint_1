const express = require('express');
const users = require('../data/index');
const newUser = require('../data/sampleUser');

const listUsers = (req,res) => {
    res.json(users);
};

// 404 code
const showUsers = (req, res) => {

    const reqId = parseInt(req.params.id)

    const requestedUser = users.filter(user => {
        if(reqId === user.id) {
            return user
        }} 
);

    if(users.find(user => reqId === user.id)) {
        res.json(requestedUser)
    } else {
        res.status(404).send('User does not exist')}   
}

const createUsers = (req, res) => {
    req.body = newUser;
    console.log(users.length);
    const user = {
      "id": users.length + 1,
      "name": newUser.name,
      "username": newUser.username,
      "email": newUser.email,
      "address": newUser.address,
      "phone": newUser.phone,
      "website": newUser.website,
      "company": newUser.company
  }
     users.push(user);
    res.send(user);
  };


  // 400 code
const updateUsers = (req,res) =>  {
    const updatedUser = req.body;
    users.map(user => {
      if(parseInt(req.params.id) === user.id) {
       
        user.name = updatedUser.name ? updatedUser.name : updatedUser.name,
        user.username = updatedUser.username ? updatedUser.username : updatedUser.username,
        user.email = updatedUser.email ? updatedUser.email : updatedUser.email,
        user.address = updatedUser.address ? updatedUser.address : updatedUser.address,
        user.phone = updatedUser.phone ? updatedUser.phone : updatedUser.phone,
        user.website = updatedUser.website ? updatedUser.website : updatedUser.website,
        user.company = updatedUser.company ? updatedUser.company : updatedUser.company
        res.json(user);
      }     
    }
    )
  };

  // 400 code
const deleteUsers = (req, res) => { 
   const notDeletedUsers = users.filter(user => {
      if(parseInt(req.params.id) !== user.id) {
        return user;
      } 
    })

    if(notDeletedUsers) {
        res.json(notDeletedUsers)
    } else (res.status(400).send("User doesn't exist"))
  };

module.exports = {listUsers, showUsers, createUsers, updateUsers, deleteUsers}