import React, { useState } from 'react';
import Member from '../trelloCompnents/Member';
import ColumnList from '../trelloCompnents/Column';

interface Props {
    // Define your component props here
}

const Theme: React.FC<Props> = (props) => {
    const [backgroundTheme, setBackgroundTheme] = useState<string>('');

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedColor = event.target.value;
        setBackgroundTheme(selectedColor);
    };

    return (
        <div className='min-h-screen min-w-full' style={{ backgroundColor: backgroundTheme }}>
            <div className='min-w-full p-2 bg-gray-900 border-b-4 border-red-500 flex justify-between'>
                <p className='text-white font-bold text-base'>Trello Box</p>
                <div className='flex items-center justify-end'>
                    <label htmlFor="themeColor" className='cursor-pointer text-white mr-3 font-bold text-base'>Change Background</label>
                    <input
                        type="color"
                        id="themeColor"
                        name="themeColor"
                        value={backgroundTheme}
                        onChange={handleThemeChange}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className='md:h-screen bg-green-950 md:w-[20%]'>
                    <Member/>
                </div>
                <div className='md:w-[80%] h-full overflow-x-auto overflow-y-hidden py-10'>
                    <ColumnList/>
                </div>
            </div>
        </div>
    );
};

export default Theme;
