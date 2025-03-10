//import functions from names.js and hobbies.js files using ES6 modules
import fullNameFunction from "./names.js";
import hobbiesFunction from "./hobbies.js";

/**
 * Return an object containing person fullName and hobbies
 * @returns {object} the person object
 */
function describePerson() {

  const fullName = fullNameFunction('Giuseppe', 'Colucci');
  const hobbies = hobbiesFunction('To develop', 'To read', 'To train');

  const person = {
    fullName,
    hobbies
  };

  return person;
}

//print the result
console.log(describePerson());
