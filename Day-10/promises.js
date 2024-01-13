// const promiseOne = new Promise(function(resolve, reject)); function(resolve, reject) do tarah
// const promiseOne = new Promise(function(resolve, reject) {
//     // do aync tasks
//     // data base calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task in complete!');
//         resolve()
//     }, 1000)
// }) 

// promiseOne.then(function() {
//     console.log('Promise consumed');
// }) // resolve ka connection hain isse


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('god is great thankyou for everything in my life');
//         resolve()
//     }, 1000)
// }).then(function() {
//     console.log('Promise I will be one of the greats')
// })

// const promiseThree = new Promise(function(resolve, reject) {
//     // resolve directly connected hai then se

//     setTimeout(function() {
//         resolve({userName: 'saksham', email: 'example.com'}) // zyada tar object pass hota
//     }, 1000);
// });

// promiseThree.then(function(user) {
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if(!error) {
//             resolve({username:'saksham', psswd: '123'});
//         } else {
//             // ab hoga rejection ka kaam
//             // ye error deta hai

//             reject('Error: Something went wrong');  
//         }
//     }, 1000)
// })

// // isko bolte chaining
// const username = promiseFour.then((user)=> {
//     console.log(user);
//     return user.username
// }).then((myUserName)=> {
//     console.log(myUserName);
// }).catch((error)=>{
//     return console.log(error);
// }).finally(()=>{
//     console.log('finally doone');
// })


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // false
        if(!error) {
            resolve({username: 'javascript', psswd: '12345'});

        }
        else {
            reject('javascript Error occured');
        }
    }, 1000);
});
// async await directly error handle nahi kar sakte so we need something

async function consumePromiseFive(){
    try {
        let response = await promiseFive;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

// consumePromiseFive();


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
        const data = await response.json();
        console.log(data);
    } catch(e) {
        console.log(e);
    }
}

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();

}).then((data)=>console.log(data)).catch((e)=>console.log(e));



