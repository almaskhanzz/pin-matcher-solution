function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const stringPin = pin + '';
    //console.log(stringPin);
    if (stringPin.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pinGenerating = getPin();
    // const pinInput = document.getElementById('pin-input');
    // pinInput.value = pinGenerating;
    document.getElementById('pin-input').value = pinGenerating;
}
//using event bubble/event delegation...
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        else if (number == '<') {

        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

//verify pin
function verifyPin() {
    const pin = document.getElementById('pin-input').value;
    const number = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('success-msg');
    const failMsg = document.getElementById('fail-msg');
    if (pin == number) {
        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
    }
    else {
        failMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}

