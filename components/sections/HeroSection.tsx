
import React from 'react';
import AnimatedFadeIn from '../AnimatedFadeIn';
import AnimatedCharText from '../AnimatedCharText';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import Counter from '../Counter';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="bg-black text-white min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-20 relative overflow-hidden">
            <div className="pt-24 lg:pt-28">
                <AnimatedFadeIn direction="right" className="w-fit">
                    <a href="#about" className="font-kanit text-lg border-b border-white pb-2">Strategy, Design, Solution Development</a>
                </AnimatedFadeIn>
            </div>
            <div className="relative">
                <AnimatedCharText text="Digital Marketing Agency" className="text-5xl md:text-8xl lg:text-9xl xl:text-[140px] font-prata font-medium leading-none" />
                <AnimatedFadeIn delay={0.5} className="relative lg:absolute lg:bottom-0 lg:right-0 mt-8 lg:mt-0 lg:translate-y-1/2 max-w-sm text-gray-400 font-kanit text-lg">
                    <p>Our approach combines innovation, technology, and results-driven solutions to help businesses dominate in the online space.</p>
                </AnimatedFadeIn>
            </div>
            <div className="flex justify-between items-end mt-20">
                <AnimatedFadeIn delay={0.8}>
                    <ArrowDownIcon />
                </AnimatedFadeIn>
                <div className="text-left font-kanit">
                    <Counter target={25} suffix="k+" textClassName="text-4xl sm:text-5xl font-light" />
                    <p className="text-base sm:text-lg">Projects completed successfully</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
