let button = document.getElementById("submit");
button.addEventListener('click', function(){
    const data = {"height": document.getElementById("height-input").value,
    "weight": document.getElementById("weight-input").value};

    const request = fetch('/bmi',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        document.getElementById("show-result").innerHTML = `مقدار bmi شما ${data.bmi} است.`
    });

})
