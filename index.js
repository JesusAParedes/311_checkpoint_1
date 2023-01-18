const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const users = require('./data/index');
const newUser = require('./data/sampleUser');

app.use(express.json());



// app.get('/', (req, res) => res.send('default route'))

app.get('/users', (req,res) => {
  console.log(users);
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  res.json(users.filter(user => parseInt(req.params.id) === user.id))
})

app.post('/users', (req, res) => {
  req.body = newUser;
  console.log(users.length);
  const user = {
    "id": users.length + 1,
    "name": req.body.name,
    "username": req.body.username,
    "email": req.body.email,
    "address": req.body.address,
    "phone": req.body.phone,
    "website": req.body.website,
    "company": req.body.company
}

users.push(user);
res.send(user);
})

app.listen(port, () => {
  console.log('app is listening on:', port)
})