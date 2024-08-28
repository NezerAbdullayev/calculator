// components
import { onClickNumber, onEqualBtn, onOperatorClick } from '../functions/eventFn';
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

        onClickNumber(curToken, input, setInput);
    }

    // operator click function
    function handleOperatorClick(e) {
        const curOperator = e.target.name;
        if (!curOperator) return;

        onOperatorClick(curOperator, input, setInput);
    }

    function handleClearBtn() {
        setInput([]);
    }

    function handleBackpaceBtn() {
        setInput((input) => input.slice(0, -1));
    }

    function handleEqualBtn() {
        if(result == "Infinity" || result=="-Infinity") return
        onEqualBtn(input, result, setHistory, setInput);
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
