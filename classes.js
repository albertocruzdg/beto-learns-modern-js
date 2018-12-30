class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hola, mi nombre es ${this.name} ${this.lastName}`);
  }
}

class Developer extends Person {
  greet() {
    console.log(`Hola, mi nombre es ${this.name} ${this.lastName} y soy desarrollador/a`);
  };
}

var beto = new Developer('Alberto', 'Cruz');
var tutu = new Person('Paulina', 'Aliaga');

beto.greet();
tutu.greet();