const randomColor = ()=> {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let U;
const startChangingColor = ()=> {
    if(!U) {
        U = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
}

const stopChangingColor = function() {
    clearInterval(U);
    U = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);