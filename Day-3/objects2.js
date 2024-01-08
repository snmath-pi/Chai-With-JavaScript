const Fuser = {}; // non singleton

const facebookUser = new Object(); // singleton


// console.log(facebookUser);

facebookUser.id = "1234324f";
facebookUser.isLoggedin = false;
facebookUser.name = "saksham";

// console.log(facebookUser);


// nested objects
const regularUser = {
    email:"sakshamnegi@gmil.com",
    fullname: {
        usefullName: {
            firstName : "saskahm",
            lastname : "Negi"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.usefullName.firstName);


// array ki tarah object bhi ho jate combine

const obj1 = {1: "a", 2:"b"};
const obj2 = {3: "c", 4:"d"};

const nobj = Object.assign({}, obj1, obj2);
console.log(nobj);


const Newbie = {...obj1, ...obj2};

console.log(Newbie);

