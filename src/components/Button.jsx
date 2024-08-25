function Button({ name, onClick, value, color }) {
    let classnames =
        ' flex h-full items-center justify-center rounded-3xl text-2xl transition-all  ';

    switch (color) {
        case 'blue':
            classnames +=
                ' bg-blue-600 text-white dark:text-white sm:hover:bg-blue-700 sm:hover:ring sm:hover:ring-blue-700 sm:hover:ring-offset-1 sm:hover:ring-offset-blue-700  sm:active:ring-offset-0  ';
            break;

        case 'gray':
            classnames +=
                '   text-black bg-[#d2d3da] sm:hover:bg-[#b4b6bded]  sm:hover:bg-[#b3b4bb] sm:hover:ring sm:hover:ring-[#b3b4bb] sm:hover:ring-offset-[#b3b4bb] dark:bg-[#4f505f] dark:hover:bg-[#606375]  dark:text-white  sm:hover:ring sm:dark:hover:ring-[#606375]  sm:hover:ring-offset-1  sm:dark:hover:ring-offset-[#606375] ] sm:active:ring-offset-0   ';
            break;

        default:
            classnames +=
                ' bg-white  text-black bg-white sm:hover:bg-stone-50  sm:hover:ring-stone-50 sm:hover:ring-offset-stone-50    dark:bg-[#2e2f38] sm:dark:hover:bg-[#434554] dark:text-white sm:hover:ring sm:dark:hover:ring-[#434554]  sm:hover:ring-offset-1  sm:dark:hover:ring-offset-[#434554]  sm:active:ring-offset-0  ';
            break;
    }

    return (
        <button name={name} onClick={onClick} className={classnames}>
            {value}
        </button>
    );
}

export default Button;
