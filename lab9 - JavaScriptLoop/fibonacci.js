function generateFibonacci() {
    while (true) {
        let input = prompt("Enter a non-negative integer to generate Fibonacci sequence, or click Cancel to exit:");
        if (input === null) { // หากผู้ใช้กด "ยกเลิก" หรือปิด prompt
            alert("Exiting the Fibonacci program.");
            break;
        }
        
        let num = parseInt(input);
        if (isNaN(num) || num < 0) {
            alert("Please enter a valid non-negative integer.");
            continue;
        }

        // สร้างลำดับ Fibonacci โดยใช้ for loop
        let fibonacci = [0, 1];
        for (let i = 2; i < 10; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }

        alert(`The first 10 numbers in the Fibonacci sequence are: ${fibonacci.join(", ")}`);
    }
}

generateFibonacci();
