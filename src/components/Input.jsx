import { useEffect, useRef } from 'react';

function Input({ type, value }) {

    const inputScrollRef = useRef(null);

    const handleScroll= ()=>{
        if (inputScrollRef.current) {
            inputScrollRef.current.scrollLeft = inputScrollRef.current.scrollWidth;
        }
    }


    useEffect(() => {
        if (inputScrollRef.current) {
            inputScrollRef.current.scrollLeft = inputScrollRef.current.scrollWidth;
        }
    }, [value]);


    // string input value
    const stringInputValue = value.toString().replaceAll(',', '');

    let classname = 'mb-4 w-full transition-all bg-transparent px-2 text-end ';

    switch (type) {
        case 'calculation':
            classname += ' h-12 text-base text-stone-500 text-[#69696c]';
            break;
        case 'result':
            classname += ' h-16 text-4xl dark:text-stone-50 text-black';
            break;
    }



    return (
        <input
            ref={inputScrollRef}
            type={type}
            value={stringInputValue || 0}
            disabled
            className={classname}
            onChange={()=>{return}}
            onScroll={handleScroll} 
        />
    );
}

export default Input;
