import { MdDarkMode } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';

function Icons({darkMode,onDarkMode}) {

    const handleShowMode=()=>{
        onDarkMode(true)
    }

    const handleDarkMode=()=>{
        onDarkMode(false)
    }

    return (
        <div className="flex justify-center justify-self-start h-[10%] mb-auto">
            <div className="relative flex h-[32px] w-[72px] items-center justify-between rounded-2xl bg-stone-600 px-1 ">
                <MdDarkMode className="text-2xl cursor-pointer" onClick={handleShowMode}/>
                <WiDaySunny className="text-2xl cursor-pointer"  onClick={handleDarkMode} />
                <div className='w-20px h-20px rounded-full bg-slate-100 absolute top-2 left-2 z-10'></div>
            </div>
        </div>
    );
}

export default Icons;
