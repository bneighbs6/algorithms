const indexOf = require("./indexOf"); // Import indexOf

// Defines array (people) of objects(person)
const people = [
  {
    id: 1,
    first_name: "Monah",
    last_name: "Yarnall",
    age: 17,
  },
  {
    id: 2,
    first_name: "Daphne",
    last_name: "McGaugey",
    age: 81,
  },
  {
    id: 3,
    first_name: "Walker",
    last_name: "Bucknell",
    age: 81,
  },
];

// This will be passed in as the isMatch() argument in indexOf()
// This fux will return the person whose age = 81
function personIs81(person) {
  return person.age === 81;
}

console.log(indexOf(personIs81, people));

// This will be passed in as the isMatch() argument in indexOf()
// This fux will return the index of the number whose value = 5
function numberIs5(value) {
  return value === 5;
}
// Mike Troute first 5 seasons Home Runs
const homeRuns = [5, 30, 27, 36, 41]

console.log(indexOf(numberIs5, homeRuns));
