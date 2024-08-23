export function evalFn(calcArray) {
    const numbers = [];
    const operators = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };

    calcArray.forEach((token) => {
        processToken(token);
    });

    // final total result
    finalizeCalculation();

    function applyOperator() {
        const operator = operators.pop(); //-["+","/"]
        const right = numbers.pop(); //[20,10,10]
        const left = numbers.pop();
        numbers.push(performOperation(operator, left, right));
    }

    function performOperation(operator, left, right) {
        switch (operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                return left / right;
            case '%':
                return right + (left / 100);
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    }

    function processToken(token) {
        if (typeof token === 'number') {
            numbers.push(token);
        } else if (['+', '-', '*', '/', '%'].includes(token)) {
            while (
                operators.length &&
                precedence[operators[operators.length - 1]] >= precedence[token] //2  1
            ) {
                applyOperator();
            }
            operators.push(token);
        }
    }

    function finalizeCalculation() {
        while (operators.length) {
            applyOperator();
        }
    }

    return numbers[0];
}