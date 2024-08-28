import HistoryItem from './HistoryItem';

function History({
    history,
    isHistoryOpen,
    onCloseHistory,
    onHistoryItemClick,
}) {
    return (
        <div
            className={`no-scrollbar absolute top-0 z-40 h-full w-2/3 overflow-hidden overflow-y-auto rounded-2xl border-r-2
                 border-[#8e84844d] bg-[#c9c9c9] shadow transition-all duration-300 dark:border-[#b2a8a34a] dark:bg-[#3f4047]  
                 sm:w-1/2 ${isHistoryOpen ? 'left-0' : '-left-2/3 sm:-left-1/2'}`}
        >
            {/* close btn stcky container */}
            <div className="sticky right-1 top-0 z-20 flex  w-full justify-end border-b border-[#7c7c784a] bg-[#c9c9c9] dark:bg-[#3f4047]">
                {/* cose btn */}
                <button
                    onClick={onCloseHistory}
                    className="mx-2 my-2 inline-block cursor-pointer rounded-2xl border bg-[#2563eb] 
                    px-5 py-1 text-end text-3xl text-white transition-all
                     hover:bg-[#1d4ed8]"
                >
                    &times;
                </button>
            </div>
            {/* close btn stcky container end */}

            {/* history map */}
            <div className="flex flex-col-reverse mt-[1px]">
                {history.length === 0 && (
                    <div className="text-red-400">History is empty.</div>
                )}
                {history.length > 0 &&
                    history?.map((item) => (
                        <HistoryItem
                            key={item.id}
                            id={item.id}
                            input={item.input}
                            result={item.result}
                            onHistoryItemClick={onHistoryItemClick}
                        />
                    ))}
            </div>
        </div>
    );
}

export default History;
