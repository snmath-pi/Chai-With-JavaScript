const userEmail = "H@gmail.com";

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have it");
}



/*
falsy <values->
</values->

1. false
2. 0
3. -0 
4. BigInt 0n
5. empty string
6. null, undefined
7. NaN
*/

// everything except them is truthy values.

const emtpyObj = {};

console.log(Object.keys(emtpyObj).length === 0);

// Nullish Coalescing Operator (??): null undefined


let val1;
val1 = 5 ?? 10;
// agar pehli value null ajaye toh dusri le lega

console.log(val1);
let val2;
val2 = null ?? 100;
console.log(val2);

let val3 = null ?? null ?? null ?? 1000;
console.log(val3);



// Terniary Operator 

let price = 100;

console.log(price > 10 ? "EAT" : "Don't Eat");