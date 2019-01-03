var beto = {
  name: 'Alberto',
  lastName: 'Cruz',
  age: 10
};

// Hoisting, var declaration inside if block is moved by JS to the top of the function.
if (beto.age > 18) {
  var adult = true;
} else {
  var adult = false;
}

console.log(adult);

for (let i = 0; i < 2; i++) {
  console.log(i);
}

try {
  //i cannot be used outside for because it is declared using let
  console.log(i);
} catch (ex) {
  console.log(ex);
}

const SOME_NUMBERS = [1, 2, 3, 4];

console.log(SOME_NUMBERS);

try {
  //cannot assign new value to SOME_NUMBERS because it is const.
  SOME_NUMBERS = [5, 6];
} catch (ex) {
  console.log(ex);
}