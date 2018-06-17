//alert('Hello World');

/* Console.log will print out the value of the string, variable, Boolean value, or whatever is between the parentheses at page load time into the Chrome Developer console.  */

console.log('Value of x is 5.');
var greeting = 'Purple';
console.log(greeting);

console.error('This is an error');

//Initialize a variable. This sets it to an undefined value. 
var greeting;

/* Allowed characters in variables in JavaScript:
letters, numbers, underscores, dollar signs $. Also cannot start with a number. */

/* 3 ways to declare variables in JavaScript: 
var, let, const
*/
let name = "Esmeralda";
console.log(name);

/* Const stands for "constant". Variable cannot be reassigned. Also, you have to assign a value. */
const cat = "Sophie";

//JavaScript object with values
const person = {
  firstName: 'Brittany',
  age: 30,
  hometown: 'Portland'
}
/*You can change property value of object, but not the object itself (aka person) with const variable type. Cannot be reassigned as a new primitive value. */
person.firstName = 'Jody';

console.log(person);

