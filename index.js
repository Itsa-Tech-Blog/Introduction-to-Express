const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3000;

const dogs = require('./dogs')

app.use(morgan('dev'))

// Body Parsing Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Make a GET                                     
// Make a GET with a query string                 
// Make a POST
// Make a PUT
// Make a DELETE
// Send responses with status codes
// Error handling


app.get('/dogs', (req, res, next) => {
  let { age } = req.query
  if (age) {
    for (const name in dogs) {
      if (dogs[name].age == age) {
        res.send(dogs[name])
      }
    }
  } else {
    res.send(dogs)
  }
})

app.post('/dogs', (req, res, next) => {
  let { name } = req.body;
  if (dogs[name]) {
    res.send('This doggo already exists in our database')
  } else {
    dogs[name] = req.body
    res.send(dogs)
  }
})

app.put('/dogs/:name', (req, res, next) => {
  let { name } = req.params
  let dogData = req.body
  if (dogs[name]) {
    for (let key in dogData) {
      if (dogs[name][key]) {
        dogs[name][key] = dogData[key]
      }
    }
    return res.send(dogs)
  } else {
    return res.send('This doggo does not exists in our database')
  }
})

app.delete('/dogs/:name', (req, res, next) => {
  let { name } = req.params
  if (dogs[name]) {
    delete dogs[name]
    res.send(dogs)
  } else {
    res.send('Could not delete this doggo; it doesn\'t exists in our database ')
  }
})

app.use((err, req, res, next) => {
  console.error(`Something went wrong: ${err}`);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

app.listen(PORT, () => {
  console.log(`Listening on Port # ${PORT}`)
})
