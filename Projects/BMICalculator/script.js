const form = document.querySelector('form')
// agar yha lagaya toh empty value le lega
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const result2 = document.querySelector('#results2');
    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid ${weight}`;
    }
    else {
        const val = (weight / (height * height/10000)).toFixed(2);
        result.innerHTML = `Your BMI is: <span>${val}</span>`;

        if(val < 18.60) {
            result2.innerHTML = `You are UnderWeight`;
        }
        else if(val >= 18.60 && val <= 24.9) {
            result2.innerHTML = `You are Normal Weight`;
        } else {
            result2.innerHTML = `You are OverWeight`;
        }
    }
})