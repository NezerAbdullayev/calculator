
function Input({ type, darkMode,value }) {

    let classname ='mb-4 w-full bg-transparent px-2 text-end text-stone-50';

    switch (type) {
        case 'calculation':
            classname += " h-12 text-base text-stone-500";
            break;
        case 'result':
            classname +=" h-16 text-4xl";
            break;
    }

    return (
        <input
            type={type}
            value={value.toString().replaceAll(",","") || 0 }
            className={classname}
            onChange={()=>{return}}
        />
    );
}

export default Input;
