function Button({
    name,
    onClick,
    value,
    colorBlue = false,
}) {
    return (
        <button
            name={name}
            onClick={onClick}
            className={`flex h-full items-center justify-center rounded-3xl text-2xl text-white transition-all duration-150
                       ${colorBlue ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#4E505F] hover:bg-[#606375]'}`}
        >
            {value}
        </button>
    );
}

export default Button;
