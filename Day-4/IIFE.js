// Immedietly invoked function expressions

// funciton lika aur turant execute karvana hai


function dota() {
    console.log(`DB connected`);
}

dota();

// iife ka syntax (iske andar fucntion)(isse immedietly called)


(function toji() {
    console.log(5);
})(); // ; bahut important hai kyunki ye khud nahi rokta 
// toh agar nahi roka toh niche ka kuch nahi chalega
// use semicolon to end


// IIFE is way to immedietly call the fucntion after its definition 
// in order to prevent global scope pollution (i.e kabhi kabar globally delcared variable funciton mein dikkat kardeta toh usko prevent karne ke liye ye use karte);

(()=> {
    console.log(`DB Connected`);
})();

((name)=> {
    console.log(`DB Connected ${name}`);
})("Saksham");






