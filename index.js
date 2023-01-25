const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const usersRoute = require('./routes/users');

app.use(express.json());

//route that the router uses
app.use(usersRoute);

app.listen(port, () => {
  console.log('app is listening on:', port)
})