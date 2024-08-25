
export function calculate(input) {
    // debugger;
   if (!input) return;

   // convert to a number
   let convertArray = [];
   let number = '';
   let result;

   for (let i = 0; i < input.length; i++) {
       if(input[i]==="%"){
           convertArray.push(Number(number)/100)
           number=""
           continue;
       }
       if (!isNaN(input[i]) || input[i] === '.') {
           number += input[i];
       } else {
           if (number) {
               convertArray.push(Number(number));
               number = '';
           }
           convertArray.push(input[i]);
       }
   }

   if (number) {
       convertArray.push(Number(number));
   }
   if (convertArray.length > 0) result = evalFn(convertArray);

   return result;

}


export function evalFn(calcArray) {
    // debugger;
    const numbers = [];
    const operators = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '÷': 2, '%': 2 };

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
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '÷':
                return left / right;
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    }

    function processToken(token) {
        if (typeof token === 'number') {
            numbers.push(token);
        } else if (['+', '-', '*', '÷', '%'].includes(token)) {
            while (
                operators.length &&
                precedence[operators[operators.length - 1]] >= precedence[token] 
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

