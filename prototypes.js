function inheritFrom(childPrototype, parentPrototype) {
  var fn = function () {};
  fn.prototype = parentPrototype.prototype;
  childPrototype.prototype = new fn;
  childPrototype.prototype.constructor = childPrototype;
}

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

//Cannot use arrow func here, {this} will be window instead of the instance of Person.
Person.prototype.greet = function ()  {
  console.log(`Hola, mi nombre es ${this.name} ${this.lastName}`);
};

function Developer(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

inheritFrom(Developer, Person);

Developer.prototype.greet = function () {
  console.log(`Hola, mi nombre es ${this.name} ${this.lastName} y soy desarrollador/a`);
};

var beto = new Developer('Alberto', 'Cruz');
var tutu = new Person('Paulina', 'Aliaga');

beto.greet();
tutu.greet();