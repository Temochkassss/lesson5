'use strict'

var number = 5;
var string = 'Hello!';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log('string * 9');

let persone = {
    name: "Lohn",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["age"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);

//alert ("Hello man!");
//let answer = confirm ("Are you ok?");
//console.log(answer);
//let answer = prompt ("Вам есть 18?", "Да");
//let answer = +prompt ("Вам есть 18?", "Да");
//console.log(typeof(null));
//console.log(typeof(answer));
//console.log("arr" + "- object");
//console.log("9" + "- object");

let incr = 10,
    decr = 10;
console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClose = false;
console.log(isChecked || !isClose);