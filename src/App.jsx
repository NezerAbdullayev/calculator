// import hooks
import { useState } from 'react';

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
    const [darkMode, setDarkMode] = useState(false);


    let result = calculate(input);

    function calculate(input) {
        if (!input) return;
        
        // convert to a number
        let convertArray = [];
        let number = '';
        let result;
    
        for (let i = 0; i < input.length; i++) {
            if (!isNaN(input[i]) || input[i] === '.') {
                number +=input[i];
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
        if(convertArray.length>2)
          result= evalFn(convertArray);

         return result
    }


    return (
        <div
            className={`flex h-screen w-screen items-center justify-center ${darkMode ? 'bg-stone-700' : 'bg-stone-500'}`}
        >
            {/* calculator container  start*/}
            <div className="mx-auto flex h-[90vh] w-[700px] max-w-[95%] flex-col items-center justify-end rounded-3xl border-4 border-double border-stone-700 bg-stone-900 p-5 pt-10">
                {/* dark mode buttons */}
                <Icons onDarkMode={setDarkMode} darkMode={darkMode} />

                {/* inputs container start */}
                <div className="flex w-full flex-col">
                    <Input
                        type="calculation"
                        darkMode={darkMode}
                        value={result || 0}
                    />
                    <Input type="result" darkMode={darkMode} value={input} />
                </div>
                {/* inputs container  end*/}

                {/* buttons */}
                <ButtonsContainer
                    darkMode={darkMode}
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
