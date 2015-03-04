"use strict";
//Herança
function Animal(foodType) {
    this.foodType = foodType;
}

Animal.prototype.feed = function () {
    alert("Fed the animal:  " + this.foodType);
};

var animal = new Animal("None");
animal.feed();                       // "None"
var test = animal instanceof Animal; // true
//instanceof "é um"

function Cow(color) {
    this.color = color;
}

// inheritance magic
Cow.prototype = new Animal("Hay");
var c = new Cow("White");
c.feed(); // "Hay"
var test = c instanceof Animal;// true
var test2 = c instanceof Cow;// true