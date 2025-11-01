import React from 'react';
import AnimatedCharText from '../AnimatedCharText';
import AnimatedFadeIn from '../AnimatedFadeIn';
import { servicesData } from '../../constants';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="bg-black text-white py-20 px-6 lg:px-20">
            <div className="flex flex-wrap justify-between items-center mb-12">
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <AnimatedCharText text="Services" className="text-lg text-gray-400 mb-2" />
                    <AnimatedCharText text="Solution we provide" className="text-5xl font-prata" />
                </div>
                <p className="w-full lg:w-1/3 text-gray-400">At Zhovon, we don’t just provide digital services – we build long-term digital success.</p>
                <div className="w-full lg:w-1/3 text-right mt-6 lg:mt-0">
                    <a href="#services" className="btn-circle border border-white rounded-full w-40 h-40 flex items-center justify-center text-center">View<br /> all services</a>
                </div>
            </div>
            <div className="mt-16">
                {servicesData.map((service, index) => (
                    <AnimatedFadeIn key={index} delay={index * 0.1}>
                        <div className="group axtra-service__item border-t border-gray-700 py-8 flex justify-between items-center relative cursor-pointer">
                            <span className="text-4xl font-prata">{service.num}</span>
                            <h3 className="text-3xl lg:text-5xl font-prata flex-1 px-4 sm:px-8">{service.title}</h3>
                            <p className="text-gray-400 max-w-xs hidden lg:block">{service.desc}</p>
                            <div className="w-12 h-12 border rounded-full flex items-center justify-center">→</div>
                            <div className="thumb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 z-10 pointer-events-none">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </AnimatedFadeIn>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;