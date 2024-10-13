// Try-catch block
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
}

// Finally block
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("This will always execute");
}


// Custom error handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error: " + error.message);
}