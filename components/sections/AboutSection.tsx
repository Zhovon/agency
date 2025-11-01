
import React from 'react';
import AnimatedCharText from '../AnimatedCharText';
import AnimatedFadeIn from '../AnimatedFadeIn';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 px-6 lg:px-20 text-center">
            <AnimatedCharText text="Get Your Website From Experienced Developers!" className="text-4xl md:text-5xl font-bold font-kanit max-w-4xl mx-auto mb-6" />
            <AnimatedFadeIn className="max-w-3xl mx-auto text-gray-600 mb-10 text-lg">
                <p>Welcome to<strong> Zhovon</strong>, your <strong>trusted digital marketing agency</strong> dedicated to transforming brands through innovative digital marketing solutions. Whether you’re a startup looking to build your online presence or an established<strong> business</strong> aiming to scale, we deliver tailored strategies that drive results.</p>
            </AnimatedFadeIn>
            <AnimatedFadeIn>
                <img src="https://picsum.photos/seed/aboutus/1200/600" alt="Digital Marketing Agency" className="mx-auto my-8 max-w-full h-auto" />
            </AnimatedFadeIn>
            <AnimatedFadeIn>
                <a href="#contact" className="inline-block bg-[#F08F42] text-black font-bold py-4 px-8 rounded-full hover:bg-black hover:text-white transition-colors">CLAIM OFFER !</a>
            </AnimatedFadeIn>
        </section>
    );
};

export default AboutSection;
