// const faker = require('faker')

// const makeDogs = (num) => {
//   let dogs = {};
//   let dogTemplate = {
//     name: '',
//     age: 0,
//     color: '',
//     breed: ''
//   };
//   let breedOptions = ["Golden Retriever", "Terrier", "Great Dane", "Golden Doodle", "Poodle", "Saint Bernard"]
//   for (let i = 0; i < num; i++) {
//     let newDog = Object.assign({}, dogTemplate);
//     newDog.name = faker.name.firstName();
//     newDog.age = i;
//     newDog.color = faker.commerce.color();
//     newDog.breed = breedOptions[Math.floor(Math.random() * 6) + 0];
//     dogs[newDog.name] = newDog;
//   }
//   return dogs
// };


// let dogs = makeDogs(9);

// module.exports = dogs;

module.exports = {
  "Lambert": {
      "name": "Lambert",
      "age": 0,
      "color": "magenta",
      "breed": "Golden Doodle"
  },
  "Hugh": {
      "name": "Hugh",
      "age": 1,
      "color": "red",
      "breed": "Great Dane"
  },
  "Hollie": {
      "name": "Hollie",
      "age": 2,
      "color": "teal",
      "breed": "Golden Retriever"
  },
  "Wanda": {
      "name": "Wanda",
      "age": 3,
      "color": "purple",
      "breed": "Terrier"
  },
  "Trevor": {
      "name": "Trevor",
      "age": 4,
      "color": "purple",
      "breed": "Terrier"
  },
  "Libbie": {
      "name": "Libbie",
      "age": 5,
      "color": "sky blue",
      "breed": "Terrier"
  },
  "Tito": {
      "name": "Tito",
      "age": 6,
      "color": "turquoise",
      "breed": "Golden Doodle"
  },
  "Hobart": {
      "name": "Hobart",
      "age": 7,
      "color": "white",
      "breed": "Saint Bernard"
  },
  "Mattie": {
      "name": "Mattie",
      "age": 8,
      "color": "plum",
      "breed": "Golden Retriever"
  }
};

