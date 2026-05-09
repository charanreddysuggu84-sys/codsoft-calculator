// Get the display element
const display = document.getElementById('display');

// Function to add numbers or operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear everything (AC)
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character (DEL)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        // eval() takes the string (e.g., "5+5") and does the math
        display.value = eval(display.value);
    } catch (error) {
        // If the user types something wrong like "5++5"
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // Clear error after 1.5 seconds
    }
}