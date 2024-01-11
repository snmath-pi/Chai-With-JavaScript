const clock = document.getElementById('clock');
// const clock = document.getElementById('#clock');



setInterval(toji, 1000);

function toji() {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}