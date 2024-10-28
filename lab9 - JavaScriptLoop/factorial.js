function calculateFactorial() {
    while (true) {
        let input = prompt("Enter a non-negative integer to calculate its factorial, or click Cancel to exit:");
        if (input === null) { // หากผู้ใช้กด "ยกเลิก" หรือปิด prompt
            alert("Exiting the Factorial program.");
            break;
        }
        
        let num = parseInt(input);
        if (isNaN(num) || num < 0) {
            alert("Please enter a valid non-negative integer.");
            continue;
        }

        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }

        alert(`The factorial of ${num} is: ${factorial}`);
    }
}

calculateFactorial();
