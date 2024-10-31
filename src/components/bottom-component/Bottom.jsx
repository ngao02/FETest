import React from 'react';

const Bottom = () => {
    return (
        <div className=" bg-[#101423] text-center md:px-[312px] md:py-[50.5px] p-6 flex flex-col items-center justify-center">
            <div className="max-w-[303px] text-[#FCFCFD] font-bold text-base leading-6 ">
                Apply{' '}
                <a
                    href="/"
                    style={{
                        background:
                            'linear-gradient(90deg, #ABECA2 -1.42%, #2FB3FE 30.38%, #6A8EEA 65.09%, #A185F4 99.55%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Copin Affiliate Program
                </a>
                to get more benefits!
            </div>
            <div>
                <a
                    href="/"
                    className="text-[#4EAEFD] text-[13px] leading-6 font-semibold pt-1"
                >
                    Contact us
                </a>
            </div>
        </div>
    );
};

export default Bottom;
