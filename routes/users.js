const express = require('express');
const app = express();
const router = express.Router();

router.get('/users', (req,res) => {
    res.json(users)
})
