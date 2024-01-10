const all_buttons = document.querySelectorAll('.button');
// console.log(all_buttons);

const body = document.querySelector('body');

all_buttons.forEach(function (button) {
    // console.log(button);
    document.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
    });
});