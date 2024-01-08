const heros = ["thor", "ironman", "spiderman"];
const herosdc = ["superman", "flash", "batman"];


// heros.push(herosdc);
// console.log(heros); // array ke andar array hi aa gaya
// yaha par array 2 ek single element ban gaya
// console.log(heros[3]);

const all = heros.concat(herosdc);
// console.log(all);
// do arrays ko merge into new 

// spread operator

const all_new = [...heros, ...herosdc];
// console.log(all_new);


const another = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];

const usable = another.flat(100);
console.log(usable); 


console.log(Array.isArray("saksham"));
console.log(Array.from("saksham"));


console.log(Array.from({name: "saksham"})); // interesting

let a = 10; 
let b = 100;
let c = 10000;

console.log(Array.from([a, b, c]));