const clearButton = document.getElementById('clear-btn');
const checkButton = document.getElementById('check-btn')
const input = document.getElementById('user-input');
const results = document.getElementById('results-div');


// const usNumberRegex =/^1?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/
const usNumberRegext1 =/^1?[\s-]?\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/
const usNumberRegext2 =/^1?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/
const validList = [usNumberRegext1, usNumberRegext2];

const isValid = (msg) => validList.some((regex) => regex.test(msg));

const verifyInput = () => {
    const phoneNumber = input.value.trim();
    if (phoneNumber === ''){
        alert('Please provide a phone number');
    } else if (isValid(phoneNumber) === true){
        const resultBox = document.createElement('div');
        resultBox.classList.add('feedback-box', 'valid')
        resultBox.textContent = `Valid US number: ${phoneNumber}`;
        results.appendChild(resultBox);
        input.value ='';
    } else {
        const resultBox = document.createElement('div');
        resultBox.classList.add('feedback-box', 'invalid')
        resultBox.textContent = `Invalid US number: ${phoneNumber}`;
        results.appendChild(resultBox);
        input.value ='';
    }
}

const clearResults = () => {
    input.value = '';
    results.innerHTML = '';
}

checkButton.addEventListener('click', verifyInput)
input.addEventListener('keydown', (e)=> {
    if (e.key == 'Enter'){
        verifyInput()
    }
})
clearButton.addEventListener('click', clearResults)

