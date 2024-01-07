/*

Stack and Heap Memory

Stack(Primitive Data Types);
Heap(Non-Primitive Data Types);

Stack mein copy milta

Heap mein original value ka refrence

basically agar primitve mein ek jaise values hai aur ek value ko change kara toh dusre mein nahi hogi kyunki copy milti


par agar yehi same kaam non - pri. mein kara toh dono... mein values change hongi
*/

let myname = "saksham";
let ax = myname;
ax = "jfaj";
console.log(myname);
console.log(ax);

let user1 = {
    email : "saksham@gmail.com",
    psswd : "1234"
}

let user2 = user1;
user2.email = "fkjladkj";
console.log(user1);
console.log(user2);