const express = require('express');
const router = express.Router();
const users = require('../data/index');
const newUser = require('../data/sampleUser');
const usersController = require('../controllers/users')

router.get('/users', usersController.listUsers)

router.get('/users/:id', usersController.showUsers) //return 404

router.post('/users', usersController.createUsers)

router.put ('/users/:id', usersController.updateUsers) //return 400

router.delete('/users/:id', usersController.deleteUsers) //return 400

module.exports = router;
