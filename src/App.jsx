// import hooks
import { useEffect, useState } from 'react';

// import components
import ButtonsContainer from './components/ButtonsContainer';
import Icons from './components/Icons';
import Input from './components/Input';

// import eval fn
import { calculate } from './eval';
import History from './components/History';

function App() {
    // state
    const [input, setInput] = useState([]);
    const [history, setHistory] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);


    let result = calculate(input);

    useEffect(() => {
        if (isDarkMode === true)
            document.getElementById('root').classList.add('dark');
        else document.getElementById('root').classList.remove('dark');
    }, [isDarkMode]);

    // dark mode funtions
    function handleDarkMode() {
        setIsDarkMode(true);
    }

    function handleLightMode() {
        setIsDarkMode(false);
    }

    // history button functions
    function handleHiddenHistory() {
        setIsHistoryOpen(false);
    }
    function handleShowHistory(){
        setIsHistoryOpen(true)
    }


    // handle history item click
    function handleHistoryItemClick(id){
        const curClickHistoryItem=history.filter(token=>token.id === id)
        if(!curClickHistoryItem) return

        setInput(curClickHistoryItem[0].input)
    }

    return (
        <div
            className={
                'flex h-screen w-screen items-center justify-center bg-stone-500 dark:bg-stone-700'
            }
        >
            {/* calculator container  start*/}
            <div className="relative mx-auto flex h-[90vh] w-[700px] max-w-[95%] overflow-hidden flex-col items-center justify-end rounded-3xl 
            border-4 border-double border-[#9e98a4] bg-[#f1f2f3] p-5 pt-10 transition-all dark:border-stone-700 dark:bg-stone-900">
                {/* dark mode buttons */}
                <Icons
                    handleDarkMode={handleDarkMode}
                    handleLightMode={handleLightMode}
                />

                {/* inputs container start */}
                <div className="flex w-full flex-col">
                    <Input type="calculation" value={result || 0} />
                    <Input type="result" value={input} />
                </div>
                {/* inputs container  end*/}

                {/* history */}
                <History history={history} onCloseHistory={handleHiddenHistory}  isHistoryOpen={isHistoryOpen} onHistoryItemClick={handleHistoryItemClick} />

                {/* buttons */}
                <ButtonsContainer
                    input={input}
                    setInput={setInput}
                    setHistory={setHistory}
                    result={result}
                    onShowHistory={handleShowHistory}
                />
            </div>
            {/* calculator container  end*/}
        </div>
    );
}

export default App;
