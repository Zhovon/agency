
import React from 'react';
import { brandsData } from '../../constants';

const BrandsSection: React.FC = () => {
    return (
        <section className="bg-[#121212] py-20">
            <div className="w-full overflow-hidden">
                <div className="flex animate-marquee">
                    {brandsData.concat(brandsData).map((brand, index) => (
                        <div key={index} className="flex-shrink-0 mx-8">
                            <img src={brand} alt={`Brand ${index + 1}`} className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
