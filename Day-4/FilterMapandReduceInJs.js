const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNums = myNums.filter((num)=> num > 4);
// console.log(NewNums);

const nw2 = myNums.filter((num) => {
    return num > 4;
});

// console.log(nw2);

const newbie = myNums.map((num)=>num+10);
console.log(newbie);


// chaining
const NN = myNums.map((num)=>num*10).map((num)=>num*10).filter((num)=>num>500);
console.log(NN);

/// Reduce

const iter = [1, 2, 3];
const tot = iter.reduce(function(acc, cur) {
    console.log(`${acc} and currval ${cur}`);
    return acc + cur;
}, 0);

console.log(tot);

