// two types ke data types hote
// ek hota primitive dusra non primitive

// base of difference
// how is data stored and accessed in memory 

/*

1. Primitive Data types
They are call by values
Real data not given, copy of data is given
*Number
*String
*Boolean
*Null
*Undefined
*Symbol
*BigInt [ Scientific values]


2. Reference Type [Non primitive Data Type]
// memeory mein inka refernce allocate hota

*Array
*Objects
*Functions



Is Java Script Dynamically types or static typed?

JavaScript is dynamically typed variable define nahi karna padtha


*/

const score = 100;
const s = 10.3;

const isLoggedIn = false;

const temp = null;

let useremail; // value undefined hogi by default


const id = Symbol('123');
const anotherId = Symbol('123');
console.table([id, anotherId]);
console.log(id == anotherId);

const BigNumber = 12389829423948329429n;
console.log(BigNumber);




// array, object, fucntions;

const heros = ["shaktiman", "gugu"];
console.log(heros);

// curly ke andar sab object hai
let my = {
    name:"saksham",
    age:22
}
console.log(my);

const fun = function() {
    console.log("hello world");
}

fun();

console.log(typeof(fun));

