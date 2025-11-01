import React from 'react';
import type { PortfolioItem } from '../../types';
import AnimatedFadeIn from '../AnimatedFadeIn';

interface PortfolioDetailPageProps {
    item: PortfolioItem;
}

const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ item }) => {
    return (
        <div className="bg-black text-white min-h-screen p-6 sm:p-10 lg:p-20">
            <AnimatedFadeIn>
                <a href="/#portfolio" className="text-gray-400 hover:text-white transition-colors mb-8 inline-block">← Back to Portfolio</a>
            </AnimatedFadeIn>
            
            <AnimatedFadeIn delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-prata mb-4">{item.title}</h1>
                <p className="text-lg text-gray-400 mb-8">{item.date}</p>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.2}>
                <div className="my-12">
                    <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                </div>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.3}>
                <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
                    <h2 className="font-prata text-3xl mb-4 text-white">About the Project</h2>
                    <p>{item.description}</p>
                </div>
            </AnimatedFadeIn>
        </div>
    );
};

export default PortfolioDetailPage;