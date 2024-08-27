export function calculate(input) {
    // debugger;
    if (!input) return;

    // convert to a number
    let convertArray = [];
    let number = '';



    for (let i = 0; i < input.length; i++) {
        // debugger;
        const token = input[i];
        

        if (token === '%') {
            const calcToken = Number((Number(number) / 100).toFixed(6));
            convertArray.push(calcToken);
            number = '';
            continue;
        }

        if (i === 0 && token === '-' ||  (['*', '÷'].includes(input[i - 1]) && token === '-') ) {
            number += "-";
            continue;
        }

        //    token=== number || "." ?   ---> number +token
        if (!isNaN(token) || token === '.') {
            number += token;
        }
         else {  
            if (number) {
                convertArray.push(Number(number));
                number = '';
            }
            convertArray.push(token);
        }
    }

    if (number) {
        convertArray.push(Number(number));
    }

    return convertArray;
}

export function evalFn(calcArray) {
    // debugger;
    const numbers = [];
    const operators = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '÷': 2, '%': 2 };
    let result;

    calcArray?.forEach((token) => {
        processToken(token);
    });

    // final total result
    finalizeCalculation();

    function applyOperator() {
        const operator = operators.pop();
        const right = numbers.pop();
        const left = numbers.pop();
        numbers.push(performOperation(operator, left, right));
    }

    function performOperation(operator, left, right) {
        switch (operator) {
            case '+':
                return Number((left + right).toFixed(6));
            case '-':
                return Number((left - right).toFixed(6));
            case '*':
                return Number(left * right.toFixed(6));
            case '÷':
                return Number((left / right).toFixed(6));
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    }

    function processToken(token) {
        if (typeof token === 'number') {
            numbers.push(token);
        } else if (['+', '-', '*', '÷'].includes(token)) {
            while (
                operators.length &&
                precedence[operators.slice(-1)] >= precedence[token]
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
        result =!isNaN(numbers[0]) && Number(numbers[0].toFixed(6));
    }

    console.log(result,typeof result,"result")

    return result;
}
