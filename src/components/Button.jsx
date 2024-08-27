function Button({ name, onClick, value, color }) {
    
    let baseClassnames =
        'flex h-full items-center justify-center rounded-3xl text-[18px] sm:text-2xl transition-all ' +
        'sm:hover:ring sm:hover:ring-offset-1 sm:active:ring-offset-0 ';

    switch (color) {
        case 'blue':
            baseClassnames +=
                'bg-blue-600 text-white dark:text-white ' +
                'sm:hover:bg-blue-700 sm:hover:ring-blue-700 sm:hover:ring-offset-blue-700 ';
            break;

        case 'gray':
            baseClassnames +=
                'bg-[#d2d3da] text-black ' +
                'dark:bg-[#4f505f] dark:text-white dark:hover:bg-[#606375] ' + // dark mode
                'sm:hover:bg-[#b3b4bb] sm:hover:bg-[#b4b6bded] ' + // light mode
                'sm:hover:ring sm:hover:ring-[#b3b4bb] sm:hover:ring-offset-[#b3b4bb] ' + // light mode
                'sm:dark:hover:ring-[#606375] sm:dark:hover:ring-offset-[#606375] ' + // dark mode
                'transition-all hover:bg-[#b4b6bded] hover:bg-stone-50'; // light mode
            break;

        default:
            baseClassnames +=
                'bg-white text-black ' +
                'dark:bg-[#2e2f38] dark:text-white ' + // dark mode
                'sm:hover:bg-stone-50 sm:hover:ring-stone-50 sm:hover:ring-offset-stone-50 ' + // light mode
                'sm:dark:hover:bg-[#434554] sm:dark:hover:ring-[#434554] sm:dark:hover:ring-offset-[#434554] '; // dark mode
            break;
    }

    return (
        <button name={name} onClick={onClick} className={baseClassnames}>
            {value}
        </button>
    );
}

export default Button;
