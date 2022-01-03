let sayHello = (name) => `Hello ${name}`;
let printHello = (name) => {
  console.log(`Hello ${name}`);
};

let getSiblings = (n) => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('José'));
printHello('Bernardo');
console.log(getSiblings(10));
