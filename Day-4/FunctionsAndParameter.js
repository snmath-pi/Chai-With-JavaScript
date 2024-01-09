//  syntax

// function 'uska naam' () {
//     {}-> scope
// }

// function sayMyName() {
//     console.log("Saksham");
//     console.log("Saksham");
//     console.log("Saksham");
//     console.log("Saksham");
//     console.log("Saksham");
// }

// kahli refrence kuch op nahi hoga sayMyName;
// function call

// sayMyName();


function addition(a, b) { // yaha par a aur b parameters
    console.log(a + b);
}
// addition() -> NaN kyunki no arguments

addition(5, 6); // par yaha par 5 aur 6 arguments

addition(3, "a");
addition(3, null);


function loginUser(username) {
    if(!username) {
        console.log("Please enter a name bro");
    } else {
        console.log(`The name is ${username}`);
    }
}

loginUser("saksham");



