import React from 'react';
import { ArrowRight } from '../../assets/icons/ArrowRight';

const TopLeft = () => {
    return (
        <div className="md:w-[441px] md:h-[144px] absolute md:top-[76px] md:left-10 top-12 left-3">
            <div className="flex flex-col gap-3">
                <div className="text-[#FCFCFD] font-bold text-2xl leading-6 mb-3 ">
                    Unlock Rewards with the Copin Referral Program
                </div>
                <div className="text-[#C0C0C9] font-normal text-[13px] leading-6">
                    Earn rebates and commissions by inviting friends.
                    <br />
                    Grow your network and benefit from our 6-tier reward system.
                </div>
                <a href="/" className="flex gap-2 items-center cursor-pointer">
                    <div className="text-[#97CFFD] font-semibold text-[13px] leading-6">
                        View referral Ranking
                    </div>
                    <ArrowRight />
                </a>
            </div>
        </div>
    );
};

export default TopLeft;
