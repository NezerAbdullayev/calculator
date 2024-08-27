// components
import Button from './Button';

// calulete funtion
import { calculate } from '../eval';

// buttons
import { FaBackspace } from 'react-icons/fa';

function ButtonsContainer({
    input,
    setInput,
    setHistory,
    result,
    setResult,
    onShowHistory,
}) {
    // number click function
    function handleClickNumber(e) {
        const curToken = e.target.name;

        // last token
        const lastInputToken = input?.slice(-1)[0];
        // Skip if token is empty or last is "%"
        if (!curToken || lastInputToken === '%') return;

        // Prevent starting input with a decimal point if the input is empty
        if (input.length === 0 && curToken === '.') {
            setInput((input) => [...input, '0', '.']);
            return;
        }

        const allOperators = ['+', '-', '*', '÷', '%'];
        if (allOperators.includes(lastInputToken) && curToken === '.') return;

        // Check if there is a decimal point in the current number (after the last operator)
        if (input.length > 0 || input[0] !== '-') {
            // Find the index of the last operator in the input
            const lastOperatorIndex = Math.max(
                input.lastIndexOf('+'),
                input.lastIndexOf('-'),
                input.lastIndexOf('*'),
                input.lastIndexOf('÷')
            );

            // Extract the current number after the last operator
            const currentLastNumber = input.slice(lastOperatorIndex + 1).join('');

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

    // operator click function
    function handleOperatorClick(e) {
        const curOperator = e.target.name;
        if (!curOperator) return;

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
        // if (input.slice(-2)[0] === '%' && curOperator === '%') return;

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
            input.length > 1 &&
            ['*', '÷'].includes(input.slice(-2)[0]) &&
            ['-'].includes(curOperator)
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

    function handleClearBtn() {
        setInput([]);
    }

    function handleBackpaceBtn() {
        setInput((input) => input.slice(0, -1));
    }

    function handleEqualBtn() {
        const operators = ['+', '-', '*', '÷', '%'];

        const lastTokens=input.length >2  &&  calculate(input)
        const lastEqual=lastTokens && lastTokens.slice(-2) && lastTokens.slice(-2).some(lastToken=>operators.includes(lastToken))
        let lastCalc=lastEqual && lastTokens.slice(-2)


        // Check if the last character is an operator
        const isLastCharacterOperator = ['+', '*', '-', '÷'].includes(
            input.slice(-1)[0]
        );
        if (isLastCharacterOperator) return;

        // Check if the input contains any operators
        const checkForOperator =
            input.length > 0 &&
            input.slice(1)?.some((token) => operators.includes(token));


        if(!checkForOperator || !lastCalc) return;

        if(lastCalc)
            console.log(lastCalc)
            setInput(input=>[...input,...lastCalc])

        // new id
        const newId = Math.floor(Math.random() * 9999);
        // insert history
        setHistory((history) => [...history, { id: newId, input, result }]);

        // reverse string array
        const arrayResult = result.toString().split('');

        setInput([...arrayResult]);
    }

    return (
        <div className="grid h-full max-h-[50%] w-full flex-1 grid-cols-4 grid-rows-5 gap-4">
            {/* row 1 */}
            <Button value="c" onClick={handleClearBtn} color="gray" />
            <Button value="🕒" onClick={onShowHistory} color="gray" />
            <Button
                name="%"
                value="%"
                onClick={handleOperatorClick}
                color="gray"
            />
            <Button
                name="÷"
                value="÷"
                onClick={handleOperatorClick}
                color="blue"
            />

            {/* row 2 */}
            <Button name="7" value="7" onClick={handleClickNumber} />
            <Button name="8" value="8" onClick={handleClickNumber} />
            <Button name="9" value="9" onClick={handleClickNumber} />
            <Button
                name="*"
                value="*"
                onClick={handleOperatorClick}
                color="blue"
            />

            {/* row 3 */}
            <Button name="4" value="4" onClick={handleClickNumber} />
            <Button name="5" value="5" onClick={handleClickNumber} />
            <Button name="6" value="6" onClick={handleClickNumber} />
            <Button
                name="-"
                value="-"
                onClick={handleOperatorClick}
                color="blue"
            />

            {/* row 4 */}
            <Button name="1" value="1" onClick={handleClickNumber} />
            <Button name="2" value="2" onClick={handleClickNumber} />
            <Button name="3" value="3" onClick={handleClickNumber} />
            <Button
                name="+"
                value="+"
                onClick={handleOperatorClick}
                color="blue"
            />

            {/* row 5 */}
            <Button name="." value="." onClick={handleClickNumber} />
            <Button name="0" value="0" onClick={handleClickNumber} />
            <Button value={<FaBackspace />} onClick={handleBackpaceBtn} />
            <Button value="=" onClick={handleEqualBtn} color="blue" />
        </div>
    );
}

export default ButtonsContainer;
