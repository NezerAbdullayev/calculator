// import hooks
import { useEffect, useState } from 'react';

// import components
import ButtonsContainer from './components/ButtonsContainer';
import Icons from './components/Icons';
import Input from './components/Input';

// import eval fn
import { evalFn } from './eval';

function App() {
    // state
    const [input, setInput] = useState([]);
    const [history, setHistory] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode === true)
            document.getElementById('root').classList.add('dark');
        else document.getElementById('root').classList.remove('dark');
    }, [isDarkMode]);

    function handleDarkMode() {
        setIsDarkMode(true);
    }

    function handleLightMode() {
        setIsDarkMode(false);
    }

    let result = calculate(input);

    function calculate(input) {
        if (!input) return;

        // convert to a number
        let convertArray = [];
        let number = '';
        let result;

        for (let i = 0; i < input.length; i++) {
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
        if (convertArray.length > 2) result = evalFn(convertArray);

        return result;
    }

    return (
        <div
            className={
                'flex h-screen w-screen items-center justify-center bg-stone-500 dark:bg-stone-700'
            }
        >
            {/* calculator container  start*/}
            <div className="mx-auto flex h-[90vh] w-[700px] max-w-[95%] flex-col items-center justify-end rounded-3xl border-4 border-double 
            border-[#9e98a4] bg-[#f1f2f3] p-5 pt-10 transition-all dark:border-stone-700 dark:bg-stone-900">
                {/* dark mode buttons */}
                <Icons
                    handleDarkMode={handleDarkMode}
                    handleLightMode={handleLightMode}
                />

                {/* inputs container start */}
                <div className="flex w-full flex-col">
                    <Input
                        type="calculation"
                        value={result || 0}
                    />
                    <Input
                        type="result"
                        value={input}
                    />
                </div>
                {/* inputs container  end*/}

                {/* buttons */}
                <ButtonsContainer
                    input={input}
                    setInput={setInput}
                    setHistory={setHistory}
                    history={history}
                    result={result}
                />
            </div>
            {/* calculator container  end*/}
        </div>
    );
}

export default App;
