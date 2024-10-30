function min() {
    if (arguments.length === 0) return undefined;
    let minValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minValue) {
            minValue = arguments[i];
        }
    }
    return minValue;
}

function max() {
    if (arguments.length === 0) return undefined;
    let maxValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > maxValue) {
            maxValue = arguments[i];
        }
    }
    return maxValue;
}

// console.log("Minimum : ", min(4, 7, 1, 8, 2, 9));
// console.log("Minimum : ", min(10, 20, 30, 40, 50, 5));
// console.log("Minimum : ", min(15, -3, 27, 99, 14, 0));
// console.log("Minimum : ", min(100, 54, 23, 11, 87, 76));
// console.log("Minimum : ", min(-5, -10, -1, -8, -2, -3));

console.log("Maximum : ", max(4, 7, 1, 8, 2, 9));
console.log("Maximum : ", max(10, 20, 30, 40, 50, 5));
console.log("Maximum : ", max(15, -3, 27, 99, 14, 0));
console.log("Maximum : ", max(100, 54, 23, 500, 87, 76));
console.log("Maximum : ", max(-5, -500, -50, -8, -2, -3));
