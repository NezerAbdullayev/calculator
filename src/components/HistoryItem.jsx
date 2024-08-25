function HistoryItem({ input, result,id,onHistoryItemClick }) {


    return (
        <div 
        onClick={()=>onHistoryItemClick(id)}
        className="cursor-pointer px-1 border-b border-[#7c7c784a] text-stone-50 transition-all hover:bg-[#9e979791] dark:hover:bg-[#38383496]">
            <div className="break-words text-sm text-stone-500 dark:text-stone-400">{input}</div>
            <div className="break-words text-xl text-stone-950 dark:text-white">{result}</div>
        </div>
    );
}

export default HistoryItem;
