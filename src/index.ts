export {};

// EXAMPLE 1 - Destructuring Object parameters in TypeScript functions

// ✅ Destructuring without default properties
function getPerson({ name, age }: { name: string; age: number }) {
  return { name, age };
}

console.log(getPerson({ name: 'Bobby', age: 30 }));

// ✅ Destructuring with default properties
function getPerson2({ name = 'Bobby', age }: { name?: string; age: number }) {
  return { name, age };
}

console.log(getPerson2({ age: 30 }));

// ---------------------------------------------------

// // EXAMPLE 2 - Using a Type Alias or an Interface

// type GetPersonParams = {
//   name?: string;
//   age: number;
// };

// function getPerson({ name = 'Bobby', age }: GetPersonParams) {
//   return { name, age };
// }

// console.log(getPerson({ age: 30 }));

// ---------------------------------------------------

// // EXAMPLE 3 - Using destructuring inside of a function's body

// type GetPersonParams = {
//   name: string;
//   age: number;
// };

// function getPerson(obj: GetPersonParams) {
//   const { name, age } = obj;

//   return { name, age };
// }

// console.log(getPerson({ name: 'Bobby', age: 30 }));
