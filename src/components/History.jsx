import HistoryItem from './HistoryItem';

function History({ history,isHistoryOpen,onCloseHistory,onHistoryItemClick }) {
    
    return (
        <div className={`absolute  overflow-hidden transition-all duration-300 top-0 z-40 h-full w-2/3 rounded-2xl border-r-2 border-[#b2a8a34a] bg-[#3f4047] shadow sm:w-1/2
          ${isHistoryOpen ? "left-0" : " -left-2/3 sm:-left-1/2" }`}>

            {/* close button */}
            <div className="flex justify-end border-b border-[#7c7c784a]">
                <div
                    onClick={onCloseHistory}
                    className="mx-2  my-2 inline-block cursor-pointer rounded-2xl bg-[#2563eb] px-5 py-1 text-end text-3xl border
                     text-white transition-all hover:bg-[#1d4ed8]"
                >
                    &times;
                </div>
            </div>

            {/* history map */}
            <div className="flex flex-col-reverse ">
                {(history.length === 0) && (<div className='text-red-400'>History is empty.</div>)}
                {(history.length>0) && (history?.map((item) => (
                    <HistoryItem
                        key={item.id}
                        id={item.id}
                        input={item.input}
                        result={item.result}
                        onHistoryItemClick={onHistoryItemClick}
                    />
                )))}
            </div>
        </div>
    );
}

export default History;
