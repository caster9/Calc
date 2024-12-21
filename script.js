// Function to append a value to the display
function appendToDisplay(value: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += value;
}

// Function to clear the display
function clearDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
}

// Function to calculate the result
function calculateResult(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = eval(display.value).toString();
    } catch (e) {
        display.value = 'Error';
    }
}