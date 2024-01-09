// ye ... spread opeartor bahut sari values ek saath return karne ka tarika
function calculateCartPrice(...num) {
    return num;
}

console.log(calculateCartPrice(100, 200, 3000));


// baki sari values normal hongi but ye ... ek saath print hongi

function calculateCartPrice2(val1, val2, ...num) {
    return num;
}

// console.log(calculateCartPrice2(100, 200, 300, 400, 500));
// 100 200 trated as val1 val2 rest of the thins as array returned


const user = {
    name: "Saksham",
    email: "sakshamnegi@gmail.com",
    age: 19
}

function generateUserInfo(anyobject) {
    console.log(`The username is ${anyobject.name}, His age is ${anyobject.age}`);
}

// generateUserInfo(user);
// if I pass for example emailss then this key is not defined in object
// this would then be returned as undefined so we have to take care of that.
// have to take care of type checking


// ek tarika ye bhi hai
generateUserInfo({
    name: "sam",
    age: 20
});



const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

function generateOutput(generalArray) {
    return myArray[2];
}

console.log(generateOutput(myArray));
