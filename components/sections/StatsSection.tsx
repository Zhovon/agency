
import React from 'react';
import AnimatedFadeIn from '../AnimatedFadeIn';
import Counter from '../Counter';

const StatsSection: React.FC = () => {
    return (
        <section className="bg-black text-white py-20 px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <AnimatedFadeIn>
                    <Counter target={25} suffix="K" textClassName="text-5xl sm:text-6xl font-prata" />
                    <p className="text-gray-400 mt-2">Project<br />completed</p>
                </AnimatedFadeIn>
                <AnimatedFadeIn delay={0.1}>
                    <Counter target={8} suffix="K+" textClassName="text-5xl sm:text-6xl font-prata" />
                    <p className="text-gray-400 mt-2">Happy<br />customers</p>
                </AnimatedFadeIn>
                <AnimatedFadeIn delay={0.2}>
                    <Counter target={15} textClassName="text-5xl sm:text-6xl font-prata" />
                    <p className="text-gray-400 mt-2">Years<br />experiences</p>
                </AnimatedFadeIn>
                <AnimatedFadeIn delay={0.3}>
                    <Counter target={98} textClassName="text-5xl sm:text-6xl font-prata" />
                    <p className="text-gray-400 mt-2">Awards<br />achievement</p>
                </AnimatedFadeIn>
            </div>
        </section>
    );
};

export default StatsSection;
