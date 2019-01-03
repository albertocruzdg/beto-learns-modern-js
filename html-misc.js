//Adding a class to a dom element
var element = document.getElementById('theElement');

element.classList.add('theClass');

var dataset = element.dataset;
console.log(dataset.foo);


//bind, context and "this"
//Using arrow functions bind is not necessary because arrow functions always inherit its parent context.

// handleClick(ev) {
  
// }

// this.handleClick = this.handleClick.bind(this);

// handleClick = (ev) => {

// };