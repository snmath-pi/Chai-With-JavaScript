// javascript can run ONE statement at a time in order
// javascript is single threaded language
// a thread is like an ordered sequence of statements
// only one of those statements can run at a time

console.log(1)
console.log(2)
setTimeout(()=>{
    console.log('Callback Function Fired')
}, 2000);
console.log(3)
console.log(4)