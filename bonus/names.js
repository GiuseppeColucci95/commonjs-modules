/**
 * Return an object constructed with the given parameters
 * @param {string} firstName first name to append to the return object
 * @param {string} lastName last name to append to the return object
 * @returns {object}
 */
function givesFullNameObj(firstName, lastName) {

  return {
    firstName,
    lastName
  };
}

//export the function with ES6 modules
export default givesFullNameObj;