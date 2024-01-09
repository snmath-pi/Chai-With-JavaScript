// for of 

// they are array specific loops

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    // console.log(i);
}


// Maps

const newMap = new Map();
newMap.set("IN", "INDIA");
newMap.set("USA", "United States Of Shit");

// console.log(newMap);

// for (const [key, value] of newMap) {
//     console.log(key); console.log(value);
// }


const coding = ["afsd", "fasdf", "fads", "fasd", "asdsf"];

// coding.forEach(function(val) {
//     console.log(val);
// });

// coding.forEach((iter) => {
//     console.log(iter);
// })

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });


const cur = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    }, 
    {
        languageName: "C++",
        languageFileName: "cpp"
    }, 
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

cur.forEach((iter)=> {
    console.log(iter.languageFileName);
})