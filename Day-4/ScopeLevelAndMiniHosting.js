// Nested Scopes

function one() {
    const var1 = "abcdef";

    function two() {
        const var2 = "ghijk";
        console.log(var1);
    }
    // console.log(var2) ye cheez error degi kyunki sirf two()
    // mein defined hain
    two(); // this is a child nested function
}
one();

if (true) {
    const var1 = "abcedf";

    if(true) {
        const var2 = "fajkds";
        console.log(var1);
    }
    // console.log(var2) ye nahi chalega
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++//

function addtwo(num) {
    return num + 2;
}

console.log(addtwo(10));
const addTwoType2 = function(num) {
    return num + 2;
}

console.log(addTwoType2(20));


