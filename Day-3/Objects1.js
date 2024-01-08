// singleton (constructor se singleton banta)
// literals se singleton nahi banta

// ye hain constructor vala method
// Object.create();

// ye hai literal
const u = Symbol("key1");

const jsuser = {
    name: "Saksham",
    age: 20,
    // u : "key 1", agar aise define kara toh vo symbol nahi hoga
    // ye string hoga

    // symbol define karna toh aise karo

    [u]: "key1",
    location:"Delhi",
    email: "sakshamnegi40069@gmail.com",
    isLoggedIn: false,
    "full name": "Saksham Negi"
}


// ek tarika toh ye hai normal tarika
console.log(jsuser.email);

// iska alava ek tarika 
console.log(jsuser["email"]);

// iska kaam tab ata jab key hi string hai jaise full name ka case
// agar puri key string hai 
// then there's no way to access it with '.' operator
// but dusre tarike se you can access it.

console.log(jsuser["full name"]);

console.log(typeof jsuser[u]);


jsuser.email = "fjfasdkjkfjas@gmail.com";

// Object.freeze(jsuser);
// freeze karne ke baad koi change nahi hoga 


jsuser.greeting = function() {
    console.log("hello");
}
jsuser.greeting2 = function() {
    console.log(`hello ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());


