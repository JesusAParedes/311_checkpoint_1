const express = require('express');
const users = require('../data/index');
const newUser = require('../data/sampleUser');

const listUsers = (req,res) => {
    res.json(users); //returns all users as a JSON response
};

// 404 code
const showUsers = (req, res) => {
// saves the requested id of the user in a variable
    const reqId = parseInt(req.params.id); 

    const requestedUser = users.filter(user => {
        if(reqId === user.id) {
            return user
        }} //filters through the users and returns the user that matches what the client input
);
    //logic to determine if the user the client is looking for is in the database or not. If it's there, a response is sent back. If not, a 404 error is sent instead.
    if(users.find(user => reqId === user.id)) {
        res.json(requestedUser)
    } else {
        res.status(404).send()}   
}

const createUsers = (req, res) => {
  //the client's input is saved in a variable
    const clientUser = req.body; 
  // a user is made with the data from the variable
    const user = {
      "id": users.length + 1,
      "name": clientUser.name,
      "username": clientUser.username,
      "email": clientUser.email,
      "address": clientUser.address,
      "phone": clientUser.phone,
      "website": clientUser.website,
      "company": clientUser.company
  }
  // the user is placed in the array and sent back to the client
     users.push(user);
    res.send(user);
  };


  // 400 code
const updateUsers = (req,res) =>  {
  // saves the requested id of the user in a variable 
    const reqId = parseInt(req.params.id);
  //the client's input is saved in a variable
    const updatedUser = req.body;
  //the array of users is cycled through and the info is updated if it is different than what is currently there
    users.map(user => {
      if(reqId === user.id) {
        user.name = updatedUser.name ? updatedUser.name : updatedUser.name,
        user.username = updatedUser.username ? updatedUser.username : updatedUser.username,
        user.email = updatedUser.email ? updatedUser.email : updatedUser.email,
        user.address = updatedUser.address ? updatedUser.address : updatedUser.address,
        user.phone = updatedUser.phone ? updatedUser.phone : updatedUser.phone,
        user.website = updatedUser.website ? updatedUser.website : updatedUser.website,
        user.company = updatedUser.company ? updatedUser.company : updatedUser.company
      }     
    })

  //logic to determine if the user the client is looking for is in the database or not. If it's there, a response is sent back. If not, a 400 error is sent instead.
    if(users.find(user => reqId === user.id)) {
        res.json(updatedUser)
    } else {
        res.status(400).send()} 
  };

  // 400 code
const deleteUsers = (req, res) => { 
  // saves the requested id of the user in a variable 
    const reqId = parseInt(req.params.id);
  //looks through the array and returns all of the users that are not deleted back to the client.
    const notDeletedUsers = users.filter(user => {
      if(reqId !== user.id) {
        return user;
      } 
    })

  //logic to determine if the user the client is looking for is in the database or not. If it's there, a response is sent back. If not, a 400 error is sent instead.
    if(users.find(user => reqId === user.id)) {
        res.json(notDeletedUsers)
    } else {
        res.status(400).send()} 
  };

module.exports = {listUsers, showUsers, createUsers, updateUsers, deleteUsers} //all the functions are exported to the routes file so they can be used