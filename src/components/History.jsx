import HistoryItem from './HistoryItem';

function History({ history,isHistory,onCloseHistory }) {


    return (
        <div className={`absolute  transition-all duration-300 top-0 z-40 h-full w-2/3 rounded-2xl border-r-2 border-[#b2a8a34a] bg-[#3f4047] shadow sm:w-1/2
          ${isHistory ? "left-0" : "-left-1/2" }`}>
            {/* close button */}
            <div className="flex justify-end">
                <div
                    onClick={onCloseHistory}
                    className="mx-2 ml-auto mt-2 inline-block cursor-pointer rounded-2xl bg-[#2563eb] px-5 py-1 text-end text-3xl
                     text-white transition-all hover:bg-[#1d4ed8]"
                >
                    &times;
                </div>
            </div>

            {/* history map */}
            <div className="flex flex-col gap-1">
                {history?.map((item) => (
                    <HistoryItem
                        key={item.id}
                        input={item.input}
                        result={item.result}
                    />
                ))}
            </div>
        </div>
    );
}

export default History;
