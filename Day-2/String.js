// single double koi fark nahi padtha '' "" ek hi baat

const namE = "saksham";
const cnt = 100;

console.log(namE + cnt + "VAVAV");

// `` ye hai bhai string interpolation
console.log(`Hello my name is ${namE} and my cnt is ${cnt}`) 

const discord = new String('saksham');
/// object hai ye
console.log(typeof(discord));
// indexing ka matlab array nahi 
// iska matlab key value pair hence object hai
// 0 : s ... bla bla... 
console.log(discord[0]);

console.log(discord.length);
console.log(discord.toUpperCase());
console.log(discord.charAt(5));
console.log(discord.indexOf('s'));
// agar character nahi hoga toh -1 dega ye bhai

let value = "afkjfsdkj-afdsjfsajf";

const y = value.substring(0, 4);
console.log(y);

const another = y.slice(0, 4);
console.log(another);

console.log(value.length);
const booga = y.slice(-20, 2);
console.log(booga);

// trim karta khali white space and new line par
const yy = "   afskjlfs afdjsa  ";
console.log(yy);
console.log(yy.trim());


let url = "https://whatthefufufufu.com";
url.replace('f', '-');
console.log(url);

console.log(url.includes("blud"));

let u = 'a-b-c-d-e-f-f-f-g';

const word = u.split('-');
console.log(word);




