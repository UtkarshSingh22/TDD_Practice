function isValid(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return false;
    }
    return true;
}

function add(num1, num2) {
    if (isValid(num1, num2)) {
        return num1 + num2;
    }
    return "Arguments contain a non-number";
}

function subtract(num1, num2) {
    if (isValid(num1, num2)) {
        return num1 - num2;
    }
    return "Arguments contain a non-number";
}

function multiply(num1, num2) {
    if (isValid(num1, num2)) {
        return num1 * num2;
    }
    return "Arguments contain a non-number";
}

function divide(num1, num2) {
    if (isValid(num1, num2)) {
        return num1 / num2;
    }
    return "Arguments contain a non-number";
}

const calculator = {
    add,
    subtract,
    divide,
    multiply,
};

export default calculator;
