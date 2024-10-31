import React from 'react';
import { Vector } from '../../assets/icons/Vector';
import { Icon1 } from '../../assets/icons/Icon1';
import { Icon2 } from '../../assets/icons/Icon2';
import { Icon3 } from '../../assets/icons/Icon3';
import { Icon4 } from '../../assets/icons/Icon4';

const howItWorksData = [
    {
        icon: <Icon1 />,
        title: '1.Two-Level Referral System',
        description:
            'Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)',
    },
    {
        icon: <Icon2 />,
        title: '2.Earn Rebates & Commissions',
        description:
            'Earn rebates on your trades and commissions from F1 and F2.',
    },
    {
        icon: <Icon3 />,
        title: '3.Claim Daily Rewards',
        description:
            'Rewards are credited after trades close and claimable daily at 0:00 UTC.',
    },
    {
        icon: <Icon4 />,
        title: '4.Referral Tier System',
        description:
            'Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days',
    },
];
const Body = () => {
    return (
        <div>
            <div className="flex gap-2">
                <Vector />
                <div className="text-[#FCFCFD] text-base font-semibold mb-3">
                    How It Works?
                </div>
            </div>
            <div className="flex justify-between gap-2 flex-col md:flex-row ">
                {howItWorksData.map((item, index) => (
                    <div
                        key={index}
                        className="min-h-[206px] flex-1 flex flex-col p-4 gap-6 rounded-[4px] border-[1px] border-[#313856] "
                    >
                        <div>{item.icon}</div>
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-[#FCFCFD] text-base font-medium">
                                {item.title}
                            </h3>
                            <p className="text-[#C0C0C9] font-normal text-[13px] leading-6">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
