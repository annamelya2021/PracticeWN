let currentInput: string = '';
let operation: string = '';
let storedValue: string = '';
let result: number;

const displayRef = document.getElementById('display') as HTMLInputElement;
const historyList = document.getElementById('history') as HTMLUListElement;
const calculationHistory: string[] = JSON.parse(localStorage.getItem('history') || '[]').reverse();

displayHistory();

function addNumber(number: string): void {
    currentInput += number;
    displayRef.value = currentInput;
}

function setOperation(symbol: string): void {
    if (currentInput === '') return;
    if (storedValue !== '') {
        calculate();
    }
    operation = symbol;
    storedValue = currentInput;
    currentInput = '';
}

function clearDisplay(): void {
    currentInput = '';
    operation = '';
    storedValue = '';
    displayRef.value = '';
}

function calculate(): void {
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

    currentInput = result.toString();
    const historySolution = `${prev} ${operation} ${current} = ${result}`;
    operation = '';
    storedValue = '';
    displayRef.value = result.toString();
    saveToHistory(historySolution); 
}

function saveToHistory(solution: string): void {
    calculationHistory.push(solution);
    localStorage.setItem('history', JSON.stringify(calculationHistory));
    displayHistory();
}

function displayHistory(): void {  
    historyList.innerHTML = '';
    calculationHistory.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        historyList.appendChild(li);
    });
}
