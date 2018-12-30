var beto = {
  name: 'Alberto',
  age: 26,
  country: 'Argentina',
  nickname: 'beto',
  books: 4,
};

var tutu = {
  name: 'Paulina',
  age: 27,
  country: 'Chile',
  nickname: 'tutu',
  books: 7,
};

//Creating an array with two objects
var people = [beto, tutu];

//Creating two arrow funcs, first one using destructuring just for fun
const isFromChile = ({ country }) => country == 'Chile';
const isFromArgentina = person => person.country == 'Argentina';

//Filter returns an array. I just want the first one of each.
var chilean = people.filter(isFromChile)[0];
var argentinian = people.filter(isFromArgentina)[0];

console.log(`${chilean.name} es de Chile`);
console.log(`${argentinian.name} es de Argentina`);

const getPersonWithLessInfo = ({nickname, name}) => {
  return {
    nickname,
    name
  };
};

//Map returns a new array with results of invocation to a func with every item in the array as a parameter.
//... just like LINQ's .Select() in C# :D
var peopleWithLessInfo = people.map(getPersonWithLessInfo);

peopleWithLessInfo.forEach(person => console.log(`A ${person.name} le dicen ${person.nickname}`));

const reducer = (total, person) => total += person.books

//Reduce returns one value processed by the reducer (which gets executed people.length times) given an inital value.
var totalBooks = people.reduce(reducer, 0);

console.log(`Hay un total de ${totalBooks} libros`);