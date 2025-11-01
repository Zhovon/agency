
import React from 'react';
import AnimatedCharText from '../AnimatedCharText';
import AnimatedFadeIn from '../AnimatedFadeIn';
import { workflowData } from '../../constants';

const WorkflowSection: React.FC = () => {
    return (
        <section className="bg-[#121212] text-white py-20 px-6 lg:px-20">
            <AnimatedCharText text="Workflow" className="text-lg text-gray-400 mb-2" />
            <AnimatedCharText text="How we work" className="text-5xl font-prata mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-700">
                {workflowData.map((item, index) => (
                    <AnimatedFadeIn key={index} delay={index * 0.1} className="bg-[#121212] p-8 group transition-all duration-300 hover:bg-[#1C1D20]">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-500 font-kanit">{`Step ${item.step}`}</span>
                            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center bg-black group-hover:bg-[#F08F42] transition-colors duration-300">
                                <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-8xl font-prata mb-4">{item.step}</h3>
                        <h4 className="text-2xl font-prata mb-4 group-hover:text-[#F08F42] transition-colors duration-300">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
                    </AnimatedFadeIn>
                ))}
            </div>
        </section>
    );
};

export default WorkflowSection;
