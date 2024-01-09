const user = {
    username: "Saksham",
    price: 999,
    weclomeMessage: function() {
        console.log(`${this.username} Welcome to Wesbite`);
        // console.log(this);
        // this. matlab current context
        // ye value sam mein isliye change hui kyuki current context change kar diya tha
    }
}

// par yaha par this. toh current context kya?

// user.weclomeMessage();

// user.username = "Sam";
// user.weclomeMessage();
// context changed and this refers to context so we get that value

// console.log(this);// yaha par kuch bhi hold nahi karta this

// browser ke andar global object window object hota hai

// function fun() {
//     let username: "fasfa",
//     console.log(this.username);
//     // fncton ke andar this use hi nahi hoga kabhi bhi
// }

// fun();


// const fun2 = function() {
//     let username = "afjds";
//     console.log(this.username);
// } undefined dega

// isme bhi nahi chalega

const func2 = () => {
    let username = "afjds";
    console.log(this);
}
func2();





/// _____________ basic arrow func  ___________ ?//

const add = (num1, num2) => {
    return !~(num1-1)  ^ !~(num2-1);
}

console.log(add(1, 2));



// way to define implicit return

const add5 = (x, y) => x + y;

console.log(add5(10, 5));


const add2 = (x, y) => (x + y);

console.log(67 + 29);



const myArray = [1, 2, 3, 4, 6];

// myArray.forEach(()=>(1 + 2))
