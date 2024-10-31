import React from 'react';
import TopLeft from './TopLeft';
import TopRight from './TopRight';

const Top = () => {
    return (
        <div
            className="h-[279px] w-full border-b border-[#313856]"
            style={{
                background:
                    'linear-gradient(90deg, rgba(62, 162, 244, 0) 13.07%, rgba(66, 62, 244, 0.1) 103.18%)',
            }}
        >
            <div className="flex flex-col ">
                <TopLeft />
                <div className="hidden md:flex">
                    <TopRight />
                </div>
            </div>
        </div>
    );
};

export default Top;
