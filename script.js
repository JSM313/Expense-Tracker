// * DESTRUCTURING...

// ! ARRAY DESTRUCTURING...

const alphabet = ["A", "B", "C", "D", "E", "F"];

const numbers = ["1", "2", "3", "4", "5", "6"];

//* To log first two elements...
// const [a, b]  = alphabet;

//* To skip b or any other middle element...
// const [a, , c] = alphabet;

//* To get the rest elements...
// const [a, , c, ...rest] = alphabet;
// const [a, b, ...rest] = alphabet;

// * To combine two arrays...
// const newArray = [...alphabet, ...numbers]; // spread operator

// console.log(newArray);

/*
const sumAndMultiply = (a, b) => {
  return [a + b, a * b];
};

const [sum, multiply, divison = "No division"] = sumAndMultiply(2, 3);

console.log(sum);
console.log(multiply);
console.log(divison);
*/

// ! 2. Object Destructuring (More useful than array destructuring...)

const personOne = {
  name: "Kyle",
  age: 24,
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  name: "Sally",
  age: 32,
  address: {
    city: "Somwhere else",
    state: "Another one of them",
  },
};

// * Array destructuring is based on the position of the element whereas object destructuring is based on the name of the key...
// const { name, age } = personTwo;

// const { name: firstName, age } = personTwo; // assigning a variable to the name...

// const { name, age, favFood = "Burgers" } = personTwo; //assigning default values...

// const { name, age, ...rest } = personOne;

// console.log(name);
// console.log(age);
// console.log(favFood);

// console.log(rest);

// Destructuring nested objects...
const {
  name,
  age,
  address: { city },
} = personOne;

console.log(city);

const printUser = ({ name, age }) => {
  console.log(`${name} is ${age}`);
};

printUser(personOne);
