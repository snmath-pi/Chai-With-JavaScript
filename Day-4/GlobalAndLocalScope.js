// let var const
// basic gyan ki baat ye hai ki agar 
// local scope hai toh bas uske andar tak hi kaam ayega
// aur agar global scope hai toh andar bahar dono sab jaga chalega
// jaise neeche a, b, c global scope hai but agar jaise define kara 
// if ke andar toh voh khali if ke andar hi chalega




let a = 10;
const b = 100;
var c = 20;

console.log(a); console.log(b); console.log(c);

if(a > 5) {
    let Q = a ** 5;
    console.log(Q);
}

// agar yaha par console.log(Q) karvaya toh error dega kyunki defined 
// hi nahi hai if(a > 5) ke bahar uska kuch kaam nahi 