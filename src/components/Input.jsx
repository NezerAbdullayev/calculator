
function Input({ type,value }) {
    // string input value
    const stringInputValue=value.toString().replaceAll(",","")

    let classname ='mb-4 w-full transition-all bg-transparent px-2 text-end ';

    switch (type) {
        case 'calculation':
            classname += " h-12 text-base text-stone-500 text-[#69696c]";
            break;
        case 'result':
            classname +=" h-16 text-4xl dark:text-stone-50 text-black";
            break;
    }

    return (
        <input
            type={type}
            value={stringInputValue || 0 }
            className={classname}
            onChange={()=>{return}}
        />
    );
}

export default Input;
