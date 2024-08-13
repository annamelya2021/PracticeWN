let currentInput = '';
let operation = '';
let storedValue = '';
let result;

const displayRef = document.getElementById('display');
const historyList = document.getElementById('history');
const history = JSON.parse(localStorage.getItem('history')) || [];

displayHistory();

function addNumber(number) {
    currentInput += number;
    displayRef.value = currentInput;
}

function setOperation(symbol) {
    if (currentInput === '') return;
    if (storedValue !== '') {
        calculate();
    }
    operation = symbol;
    storedValue = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    storedValue = '';
    displayRef.value = '';
}

function calculate() {
    const prev = parseFloat(storedValue);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    const historysolution = `${prev} ${operation} ${current} = ${result}`;
    operation = '';
    storedValue = '';
    displayRef.value = result;
    saveToHistory(historysolution); 
}


function saveToHistory(solution) {
    history.push(solution);
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function displayHistory() {  
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        historyList.appendChild(li);
    });
}

