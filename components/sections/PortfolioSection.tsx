import React from 'react';
import AnimatedFadeIn from '../AnimatedFadeIn';
import { portfolioData } from '../../constants';
import { useStickyScale } from '../../hooks/useStickyScale';

const PortfolioSection: React.FC = () => {
    const [workContainerRef, workHeadingRef, workHeadingStyle] = useStickyScale<HTMLDivElement, HTMLDivElement>();

    const leftColumnProjects = portfolioData.filter((_, index) => index % 2 === 0);
    const rightColumnProjects = portfolioData.filter((_, index) => index % 2 !== 0);

    return (
        <section id="portfolio" className="bg-black text-white relative">
            <div ref={workContainerRef} className="h-[350vh]">
                <div className="sticky top-0 h-screen flex items-start justify-center pt-20">
                     <div style={{ overflow: 'hidden' }}>
                        <div ref={workHeadingRef} style={workHeadingStyle}>
                            <h2 className="font-prata text-center whitespace-nowrap">Work</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 -mt-[350vh] py-40 px-6 lg:px-20">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 space-y-8">
                        {leftColumnProjects.map((item, index) => (
                            <AnimatedFadeIn key={item.slug} delay={index * 0.1}>
                                <a href={`/#/portfolio/${item.slug}`} className="group block relative overflow-hidden rounded-lg">
                                    <img src={item.img} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-end p-8 text-left">
                                        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <h3 className="text-3xl font-prata text-white">{item.title}</h3>
                                            <p className="text-gray-300 mt-1">{item.date}</p>
                                        </div>
                                    </div>
                                </a>
                            </AnimatedFadeIn>
                        ))}
                    </div>
                    <div className="w-full md:w-1/2 space-y-8 md:mt-48">
                        {rightColumnProjects.map((item, index) => (
                            <AnimatedFadeIn key={item.slug} delay={index * 0.1}>
                                <a href={`/#/portfolio/${item.slug}`} className="group block relative overflow-hidden rounded-lg">
                                    <img src={item.img} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-end p-8 text-left">
                                        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <h3 className="text-3xl font-prata text-white">{item.title}</h3>
                                            <p className="text-gray-300 mt-1">{item.date}</p>
                                        </div>
                                    </div>
                                </a>
                            </AnimatedFadeIn>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-16">
                    <a href="#portfolio" className="btn-circle border border-white rounded-full w-40 h-40 flex items-center justify-center text-center mx-auto">View<br /> all projects</a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;