import React from 'react';
import { Bg1 } from '../../assets/icons/Bg1';
import { Bg2 } from '../../assets/icons/Bg2';
import { Bg3 } from '../../assets/icons/Bg3';
import { Tier1 } from '../../assets/icons/Tier1';
import { Tier2 } from '../../assets/icons/Tier2';
import { Tier3 } from '../../assets/icons/Tier3';
import { Tier4 } from '../../assets/icons/Tier4';
import { Tier5 } from '../../assets/icons/Tier5';
import { Tier6 } from '../../assets/icons/Tier6';
import { B5 } from '../../assets/icons/B5';
import { Line } from '../../assets/icons/Line';
import { Ellipse } from '../../assets/icons/Ellipse';

const tierData = [
    { id: 1, image: <Tier1 />, title: 'Tier 1' },
    { id: 2, image: <Tier2 />, title: 'Tier 2' },
    { id: 3, image: <Tier3 />, title: 'Tier 3' },
    { id: 4, image: <Tier4 />, title: 'Tier 4' },
    { id: 5, image: <Tier5 />, bg: <B5 />, title: 'Tier 5' },
    { id: 6, image: <Tier6 />, title: 'Tier 6' },
];
const TopRight = () => {
    return (
        <div className=" absolute w-[378px] h-[249px]  top-4 right-[48px]  ">
            <div className="absolute inset-0">
                <Bg1 />
            </div>
            <div className="absolute inset-0">
                <Bg2 />
            </div>
            <div className="absolute inset-0">
                <Bg3 />
                <div className="flex flex-row gap-6 ">
                    {tierData.map((tier) => (
                        <div key={tier.id}>
                            <div className="flex relative z-10 flex-col">
                                {tier.image}
                            </div>

                            <div className="absolute bottom-[40px] right-[133px] z-0">
                                <div className="absolute bottom-[106px] right-[-6px] ">
                                    <>
                                        <div className="relative">
                                            <Ellipse />
                                        </div>
                                        <div class="absolute top-[10px] left-[-52px] w-[118.66px] h-[52.39px] rounded-[3px] px-[4.83px] py-[6.2px] flex flex-col gap-[7.74] z-10 border-[0.69px] border-[#414e83] bg-[#0E1328]/50 text-[#FCFCFD] font-normal text-[9.5px] ">
                                            <p>F0 (Rebate): 5%</p>
                                            <p>F1 (Commission): 35%</p>
                                            <p>F2 (Commission): 10%</p>
                                        </div>
                                    </>
                                </div>

                                <Line />
                            </div>

                            <div className="absolute bottom-0 right-[65px] z-0">
                                {tier?.bg}
                            </div>
                            <p className=" text-[#FCFCFD] text-[12px] font-normal leading-[13.08px]mt-[2px] flex justify-center">
                                {tier.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopRight;
