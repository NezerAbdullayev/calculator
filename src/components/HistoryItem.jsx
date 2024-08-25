function HistoryItem({ input, result,id,onHistoryItemClick }) {


    return (
        <div 
        onClick={()=>onHistoryItemClick(id)}
        className="cursor-pointer border-b border-[#7c7c784a] text-stone-50 transition-all hover:bg-[#38383496]">
            <div className="break-words text-sm text-stone-400">{input}</div>
            <div className="break-words text-xl text-white">{result}</div>
        </div>
    );
}

export default HistoryItem;
