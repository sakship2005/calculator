// Reference to the display element
const display = document.getElementById("display");

// Function to append values to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate and display the result
function calculateResult() {
  try {
    // Evaluate the expression and display the result
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error"; // Display "Error" for invalid expressions
  }
}
