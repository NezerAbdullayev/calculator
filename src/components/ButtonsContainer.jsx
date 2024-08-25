// components
import Button from './Button';

// buttons
import { FaBackspace } from 'react-icons/fa';

function ButtonsContainer({
    input,
    setInput,
    setHistory,
    result,
    onShowHistory,
}) {
    // number click function
    function handleClickNumber(e) {
        const curToken = e.target.name;

        console.log(input)

        // last token
        const lastInputToken = input?.slice(-1)[0];
        // Skip if token is empty or last is "%"
        if (!curToken || lastInputToken === '%') return;
        // Prevent starting input with a decimal point if the input is empty
        if (input.length === 0 && curToken === '.') return;
        // Prevent adding consecutive decimal points
        if (lastInputToken === '.' && curToken === '.') return;

        setInput((input) => [...input, curToken]);
    }

    // operator click function
    function handleOperatorClick(e) {
        const curOperator = e.target.name;
        // control operator
        if (!curOperator) return;
        // operators
        const operators = ['+', '-', '*', '/'];

        // return if the first token is an operator
        if (input.length === 0) return;

        // cur input last token
        const lastCharacter = input.slice(-1)[0];

        // checking for interest operator
        if (input.slice(-2)[0] === '%' && curOperator === '%') return;

        // if last token =current token  return
        if (lastCharacter === curOperator) return;

        // Replace the operator or, if there's a decimal point, change it; otherwise, insert the operator.
        setInput((input) =>
            operators.includes(lastCharacter) || lastCharacter === '.'
                ? input.slice(0, -1).concat(curOperator)
                : input.concat(curOperator)
        );
    }

    function handleClearBtn() {
        setInput('');
    }

    function handleBackpaceBtn() {
        setInput((input) => input.slice(0, -1));
    }

    function handleEqualBtn() {
        const operators = ['+', '-', '*', '/', '%'];
        const checkForOperator =
            input.length > 0 &&
            input?.some((token) => operators.includes(token));
        if (!checkForOperator) return;

        // new id
        const newId = Math.floor(Math.random() * 9999);
        // insert history
        setHistory((history) => [...history, { id:newId, input, result }]);


        // reverse string array
        const arrayResult=result.toString().split("");

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
                name="/"
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
