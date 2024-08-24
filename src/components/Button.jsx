function Button({ name, onClick, value, color}) {
    let classnames=" flex h-full items-center justify-center rounded-3xl text-2xl transition-all  "

    switch (color) {
        case 'blue':
            classnames += ' bg-blue-600 hover:bg-blue-800 text-white dark:text-white   dark:hover:bg-blue-700';
            break;

        case 'gray':
            classnames +=" bg-white transition-all text-black bg-[#d2d3da] hover:bg-[#b4b6bded] hover:bg-stone-50 dark:bg-[#4f505f] dark:hover:bg-[#606375]  dark:text-white "
            break;

        default:
            classnames +=" bg-white transition-all text-black bg-white hover:bg-[#dfe0de]   dark:bg-[#2e2f38] dark:hover:bg-[#434554] dark:text-white "
            break;
    }

    return (
        <button
            name={name}
            onClick={onClick}
            className={classnames}
        >
            {value}
        </button>
    );
}


export default Button;
