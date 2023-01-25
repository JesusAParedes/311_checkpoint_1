const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users') //grabs the logic from the file in the controllers folder

router.get('/users', usersController.listUsers)// route that returns all users

router.get('/users/:id', usersController.showUsers) //route that returns a specific user

router.post('/users', usersController.createUsers)// route that creates a new user

router.put ('/users/:id', usersController.updateUsers) //route that updates a user

router.delete('/users/:id', usersController.deleteUsers) //route that deletes a user

module.exports = router; //exports the routes to the index.js file
