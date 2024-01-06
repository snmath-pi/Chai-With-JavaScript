let score = "333"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof(valueInNumber));
// console.log(valueInNumber); // NaN not a number if score = 333abc


let dune = null;
// console.log(typeof(dune));
let V = Number(dune);
// console.log(typeof(V));

/*
number -> number yes
number having characters [a, z] -> NaN
boolean -> number yes
*/

let ok = true;
let T = Number(ok);
// console.log(T);


let isLoggedIn = 1;
let love = "Saksham";
let BooleanLoggedIn = Boolean(isLoggedIn);
let x = Boolean(love);
console.table([BooleanLoggedIn, x]);


let yNumber = 33;
let dola = String(yNumber);
console.log(dola);
console.log(typeof(dola));
