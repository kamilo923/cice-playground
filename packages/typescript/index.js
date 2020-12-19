"use strict";
const foo = 'foo';
const bar = 1;
const baz = true;
const qux = ['bar', 'baz', 'qux'];
// Type inference
const fooInferred = 'foo';
const barInferred = 1;
const bazInferred = true;
const quxInferred = ['bar', 'baz', 'qux'];
// Null
const n = null;
const a = 'bar';
// KO: a = null
const b = Math.random() > 0.5 ? null : 'bar';
// OK: b = null
if (b !== null) {
    const l = b.length;
    console.log(l);
}
function sum(a, b = 1) {
    return a + b;
}
const result = sum(2).toFixed(4);
console.log(result);
const substract = (a, b = 1) => a + b;
const result2 = substract(3);
console.log(result2);
function concatenate(a, b) {
    if (b !== null) {
        return a.concat(b);
    }
    return a;
}
const x = concatenate('Hello', null);
const y = concatenate('Hello ', 'world');
console.log(x);
console.log(y);
const people = [
    { age: 42, name: 'Sonia', job: 'Autentia', pet: undefined },
    { age: 32, name: 'Paul', pet: 'lizard' }
];
const ages = people.reduce((a, b) => a + b.age, 0);
console.log(ages);
const greeterPerson = {
    age: 54,
    name: 'Sara',
    pet: undefined,
    greet(a) {
        return 'hello ' + a + ", I'm " + this.name;
    }
};
const greet = greeterPerson.greet('Susan');
console.log(greet);
// Clases
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log('Moved ' + distance + ' meters');
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    move(distance = 5) {
        console.log(this.name + ' moves...');
        super.move(distance);
    }
}
const dog = new Dog('Tobby');
dog.move();
class ClassWithPrivateMethodsAndProperties {
    constructor() {
        this.publicProperty = 42;
        this.privateroperty = 42;
    }
    publicMethod() {
        return 42;
    }
    privateMethod() {
        return 42;
    }
}
class ImprovedConstructorAssignment {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log('Moved ' + distance + ' meters');
    }
}
class ReadonlyClass {
    constructor(name, foo, person) {
        this.name = name;
        this.foo = foo;
        this.person = person;
    }
    bar() {
        this.person.age = 43;
        return this.name + this.foo;
    }
}
class ConsoleLogger {
    log(message) {
        console.log(message);
    }
}
class AlertLogger {
    log(message) {
        alert(message);
    }
}
