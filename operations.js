// const add = (x, y) => + x + + y;
// const substract = (x, y) => + x - + y;
// const multiply = (x, y) => + x * + y;
// const divide = (x, y) => + x / y;

const add = (x, y) => {
    return x + y;
}

const substract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return false;
    }
    return true;
};

module.exports = { add, substract, multiply, divide, validateNumbers };

