// some new


/// === -> type bhi check karta hai

console.log(5 === "five");
console.log("saksham" === "saksham");

// similarly !==

if(2 !== 2) {
    console.log("exectued");
}
if(2 !== 3) {
    console.log("exectued");
}
if(2 !== "tw") {
    console.log("exectued");
}


const balance = 100;

// if(balance > 50) console.log("ameer"), balance++; // not a good practice


const user1 = true;
const user2 = false;


if(user1 && user2) {
    console.log("user1 & user2");
}
else if(!user1 && user2) {
    console.log("user2");
}
else if(user1 && !user2) {
    console.log("user1");
}
else if(user1 || user2) {
    console.log("user1 or user2");
}
else {
    console.log("dasjfskjldaf;lasdkjfs");
}