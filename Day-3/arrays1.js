// array
// arrays in javascript are resizable
// arrays elements can't be accessed using arbitary strings
// arrays can have multiple type of elements
// arrays are zero indexed
// shallow copy is formed: whose property share same refrence point
// deep copy is formed they don't share same reference point

const myArray = [0, 1, 2, 3, 4, 5, 3]
const mya2 = new Array(1, 2, 3);

// console.log(mya2[2]);

// console.log(myArray[0]);

myArray.push(6);
// console.log(myArray);

myArray.pop();
// console.log(myArray);

// pushes element to start and pushes all other values by +1
myArray.unshift(10);
// console.log(myArray);
myArray.shift(); // basically first elment hata deta aur baki sab left shift kar deta
// console.log(myArray);


// console.log(myArray.includes(99));
// console.log(myArray.indexOf(2));
// agar arrray mein value nahi toh indexOf returns -1

const newArr = myArray.join();

// console.log(myArray);
// console.log(newArr); // type badal dega into string
// console.log(typeof(newArr));


// slice aur splice

console.log("A ", myArray);

const my1 = myArray.slice(0, 3);
console.log("B ", my1);
// const my2 = myArray.slice(-5, -1);
// console.log(my2)
// slice kata hua array deta excluding end index

// splice kata hua array deta excluding end index + 
// ek aur ** vo arrray se bhi us cheez ko remove kar deta
// that is slice doesn't modify array 
// but splice modifies it too


const my3 = myArray.splice(0, 3);
console.log("C ", my3);
console.log(myArray);

