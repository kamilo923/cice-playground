"use strict";
function getSmallPet() {
    return Math.random() > 0.5 ? { fly() { } } : { swim() { } };
}
const pet = getSmallPet();
if ('swim' in pet) {
    pet.swim();
}
// KO
if (pet.fly) {
    // KO
    pet.fly();
}
// Type guards
function isFish(pet) {
    return pet.swim !== undefined;
}
const pet2 = getSmallPet();
if (isFish(pet2)) {
    pet2.swim();
}
else {
    pet2.fly();
}
// InstanceOf
class Car {
    constructor() {
        this.wheels = 4;
    }
    drive() {
        return 'driving';
    }
}
class Plane {
    constructor() {
        this.wheels = 6;
    }
    fly() {
        return 'flying';
    }
}
function getVehicle() {
    return Math.random() > 0.5 ? new Car() : new Plane();
}
const vehicle = getVehicle();
if (vehicle instanceof Car) {
    vehicle.drive();
}
else {
    vehicle.fly();
}
// Typeof type guards
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
