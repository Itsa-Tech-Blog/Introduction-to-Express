const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

const myMiddlewareFunction = require('./utils.js');
const dogs = require('./dogs');


app.use(morgan('dev'));

// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Custom middleware function
app.use(myMiddlewareFunction);

// Get a dog using a query string and req parameter
app.get('/dogs/:name', (req, res, next) => {
  let { name } = req.params;
  let { age } = req.query;
  if (dogs[name] && age) {
    for (const name in dogs) {
      if (dogs[name].age == age) {
        res.send(dogs[name]);
      }
    }
  } else {
    let err = new Error('This doggo does not exists in our database');
    err.status = 404;
    next(err);
  }
})

// Get all dogs
app.get('/dogs', (req, res, next) => {
  res.send(dogs);
})

// Create a dog
app.post('/dogs', (req, res, next) => {
  let { name } = req.body;
  if (dogs[name]) {
    let err = new Error('This doggo already exists in our database');
    err.status = 409;
    next(err);
  } else {
    dogs[name] = req.body;
    res.send(dogs);
  }
})

// Update a dog by passing it's name
app.put('/dogs/:name', (req, res, next) => {
  let { name } = req.params;
  let dogData = req.body;
  if (dogs[name]) {
    for (let key in dogData) {
      if (dogs[name][key]) {
        dogs[name][key] = dogData[key];
      }
    }
    res.send(dogs)
  } else {
    let err = new Error('This doggo does not exists in our database');
    err.status = 404;
    next(err);
  }
})

// Delete a dog by passing it's name
app.delete('/dogs/:name', (req, res, next) => {
  let { name } = req.params;
  if (dogs[name]) {
    delete dogs[name];
    res.send(dogs);
  } else {
    let err = new Error('Could not delete this doggo; it doesn\'t exists in our database');
    err.status = 409;
    next(err);
  }
});

// Default Error Handling Function
app.use((err, req, res, next) => {
  console.error(`Something went wrong: ${err}`);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(PORT, () => {
  console.log(`Listening on Port # ${PORT}`);
});
