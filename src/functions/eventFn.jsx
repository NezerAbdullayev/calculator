const allOperators = ['+', '-', '*', '÷', '%'];

// //////////////////////////////////////////////////////////


// operator click
export function onOperatorClick(curOperator, input, setInput) {
    const operators = ['+', '-', '*', '÷'];
    const checkOperator = ['+', '*', '÷', '%'];


    // return if the first token is an operator
    if (input.length === 0 && checkOperator.includes(curOperator)) return;

    // Prevent changing the initial "-" to another operator
    if (
        input.length === 1 &&
        input[0] === '-' &&
        checkOperator.includes(curOperator)
    )
        return;

    // checking for interest operator
    if (isNaN(input.slice(-1)) && curOperator === '%') return;

    //  input last operator
    const lastCharacter = input.slice(-1)[0];

    // if last token =current token  return
    if (lastCharacter === curOperator) return;

    // Allow "-" after an operator (for negative numbers)
    if (['*', '÷'].includes(lastCharacter) && curOperator === '-') {
        setInput((input) => input.concat(curOperator));
        return;
    }

    // Prevent inserting another operator after '-'
    if (
        input.length > 1 && //2*4
        ['*', '÷'].includes(input.slice(-2)[0]) &&
        lastCharacter === '-' &&
        curOperator !== '-' &&
        checkOperator.includes(curOperator)
    ) {
        return;
    }

    // Replace the operator or, if there's a decimal point, change it; otherwise, insert the operator.
    setInput((input) =>
        operators.includes(lastCharacter) || lastCharacter === '.'
            ? input.slice(0, -1).concat(curOperator)
            : input.concat(curOperator)
    );
}




// number click

export function onClickNumber(curToken, input, setInput) {
    // last token
    const lastInputToken = input?.slice(-1)[0];
    // Skip if token is empty or last is "%"
    if (!curToken || lastInputToken === '%') return;

    // Prevent starting input with a decimal point if the input is empty
    if (input.length === 0 && curToken === '.') {
        setInput((input) => [...input, '0', '.']);
        return;
    }

    if (allOperators.includes(lastInputToken) && curToken === '.'){
        setInput(input=>[...input,"0","."])
        return
    }

    // Check if there is a decimal point in the current number (after the last operator)
    if (input.length > 0 || input[0] !== '-') {

        // Extract the current number after the last operator
        const currentLastNumber = curLastNumber(input)

        // Prevent adding another decimal point if the current number already has one
        if (currentLastNumber.includes('.') && curToken === '.') return;

        // Prevent adding leading zeroess
        if (curToken === '0' && currentLastNumber === '0') return;

        // Replace leading zero with the current token if it's not zero
        if (curToken !== '0' && curToken !== '.' && currentLastNumber === '0') {
            setInput((input) => [...input.slice(0, -1), curToken]);
            return;
        }
    }

    setInput((input) => [...input, curToken]);
}



// equal click
export function onEqualBtn(input, result, setHistory, setInput) {

    // Check if the last character is an operator
    const isLastCharacterOperator = ['+', '*', '-', '÷'].includes(
        input.slice(-1)[0]
    );

    // Check if the input contains any operators
    const checkForOperator =
        input.length > 0 &&
        input.slice(1)?.some((token) => allOperators.includes(token));

    if (!checkForOperator || isLastCharacterOperator) return;

    // new id
    const newId = Math.floor(Math.random() * 9999);
    // insert history
    setHistory((history) => [...history, { id: newId, input, result }]);

    // reverse string array
    const arrayResult = result.toString().split('');

    setInput(arrayResult);
}

// /////////////////////////////////////////////////////



function curLastNumber(input){
    const lastOperatorIndex = Math.max(
        input.lastIndexOf('+'),
        input.lastIndexOf('-'),
        input.lastIndexOf('*'),
        input.lastIndexOf('÷')
    );

    // Extract the current number after the last operator
    const currentLastNumber = input.slice(lastOperatorIndex + 1).join('');

    return currentLastNumber
}
