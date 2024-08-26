import { MdDarkMode } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';

function Icons({ handleDarkMode, handleLightMode }) {
    return (
        <div
            className={`mb-auto flex h-[10%] justify-center justify-self-start`}
        >
            {/* icon container */}
            <div className="relative flex h-[32px] w-[72px] items-center justify-between rounded-2xl bg-[#1c89e330] px-1 transition-all dark:bg-stone-600">
                <WiDaySunny
                    className="relative z-10 cursor-pointer text-2xl text-blue-500"
                    onClick={handleDarkMode}
                />

                <MdDarkMode
                    className="relativ z-10 cursor-pointer text-2xl"
                    onClick={handleLightMode}
                />

                {/* absolute circle */}
                <div className="absolute left-11 top-[3px] z-20 h-[25px] w-[25px] rounded-full bg-white dark:bg-[#4E505F] transition-[left] duration-200 dark:left-1"></div>
            </div>
        </div>
    );
}

export default Icons;
