// components
import Button from './Button';

// buttons
import { AiOutlinePercentage } from 'react-icons/ai';
import { FaBackspace } from 'react-icons/fa';
import { PiPlusMinusBold } from 'react-icons/pi';

function ButtonsContainer({ darkMode, input, history, setInput, setHistory }) {
    function handleClickNumber(e) {
        const curToken = e.target.name;
        // control token
        if (!curToken) return;

        setInput((input) => [...input, curToken]);
    }

    function handleOperatorClick(e) {
        const curOperator = e.target.name;
        // control operator
        if (!curOperator) return;
        // operators
        const operators = ['+', '-', '*', '/', '%'];

        // return if the first token is an operator
        if (input.length === 0) return;

        // cur input last token
        const lastCharacter = input.slice(-1);

        // if last token =current token  return
        if (lastCharacter[0] === curOperator) return;

        // if the operator is present change ,if not insert operator
        setInput((input) =>
            operators.includes(lastCharacter[0])
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

    function handleCalculateBtn() {}

    function handleToggleAdvancedBtn() {}

    return (
        <div className="grid h-full max-h-[50%] w-full flex-1 grid-cols-4 grid-rows-5 gap-4">
            {/* row 1 */}
            <Button value="c" onClick={handleClearBtn} />
            <Button
                value={<PiPlusMinusBold />}
                onClick={handleToggleAdvancedBtn}
            />
            <Button
                name="%"
                value={<AiOutlinePercentage />}
                onClick={handleOperatorClick}
            />
            <Button
                name="/"
                value="/"
                onClick={handleOperatorClick}
                colorBlue={true}
            />

            {/* row 2 */}
            <Button name="7" value="7" onClick={handleClickNumber} />
            <Button name="8" value="8" onClick={handleClickNumber} />
            <Button name="9" value="9" onClick={handleClickNumber} />
            <Button
                name="*"
                value="*"
                onClick={handleOperatorClick}
                colorBlue={true}
            />

            {/* row 3 */}
            <Button name="4" value="4" onClick={handleClickNumber} />
            <Button name="5" value="5" onClick={handleClickNumber} />
            <Button name="6" value="6" onClick={handleClickNumber} />
            <Button
                name="-"
                value="-"
                onClick={handleOperatorClick}
                colorBlue={true}
            />

            {/* row 4 */}
            <Button name="1" value="1" onClick={handleClickNumber} />
            <Button name="2" value="2" onClick={handleClickNumber} />
            <Button name="3" value="3" onClick={handleClickNumber} />
            <Button
                name="+"
                value="+"
                onClick={handleOperatorClick}
                colorBlue={true}
            />

            {/* row 5 */}
            <Button name="." value="." onClick={handleClickNumber} />
            <Button name="0" value="0" onClick={handleClickNumber} />
            <Button value={<FaBackspace />} onClick={handleBackpaceBtn} />
            <Button value="=" onClick={handleCalculateBtn} colorBlue={true} />
        </div>
    );
}

export default ButtonsContainer;
