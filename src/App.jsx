// import hooks
import { useState } from 'react';

// import components
import ButtonsContainer from './components/ButtonsContainer';
import Icons from './components/Icons';
import Input from './components/Input';



// import eval fn
import { evalFn } from './eval';



function App() {
    const [display, setDisplay] = useState('');
    const [history, setHistory] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    let result = calculate(display);

    function calculate(display) {
        if (!display) return;
        // convert to a number
        const convertArray = display?.split(' ').map((token) => {
            if (!isNaN(token)) return Number(token);
            return token;
        });

        if (convertArray.length > 1) return evalFn(convertArray);
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
                    <Input type="result" darkMode={darkMode} value={display} />
                </div>
                {/* inputs container  end*/}

                {/* buttons */}
                <ButtonsContainer
                    darkMode={darkMode}
                    display={display}
                    setDisplay={setDisplay}
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
