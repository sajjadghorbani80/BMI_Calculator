let showErrorsDiv = document.getElementById('show-errors');
let heightInput = document.getElementById("height-input");
let weightInput = document.getElementById("weight-input");
let showResult = document.getElementById("show-result");

function bmiApiHandler() {
    showErrorsDiv.innerHTML = null;
    let height = heightInput.value;
    let weight = weightInput.value;

    const data = { "height": height, "weight": weight };

    fetch('/bmi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => validation(data));

}

function validation(data) {
    if (data.errors) {
        showResult.innerHTML = null;
        let { weight: weightError, height: heightError } = data.errors;

        if (heightError != undefined) {
            let error = document.createElement('p');
            error.innerHTML = heightError.msg;
            showErrorsDiv.appendChild(error);
        }
        if (weightError != undefined) {
            let error = document.createElement('p');
            error.innerHTML = weightError.msg;
            showErrorsDiv.appendChild(error);
        }
        return;
    }
    showResult.style.display = 'block';
    showResult.innerHTML = `مقدار bmi شما ${data.bmi} است.`;

}
let button = document.getElementById("submit");
button.addEventListener('click', bmiApiHandler)
