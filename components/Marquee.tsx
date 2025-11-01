
import React from 'react';

interface MarqueeProps {
    items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
    const marqueeContent = items.map((item, i) => (
        <div key={i} className="flex items-center shrink-0">
            <span className="text-2xl font-medium uppercase mx-6">{item}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#000" />
            </svg>
        </div>
    ));
    
    return (
        <div className="w-full overflow-hidden bg-[#F08F42] py-6 text-black">
            <div className="flex animate-marquee">
                {marqueeContent}
                {marqueeContent}
            </div>
        </div>
    );
};

export default Marquee;
