
import React from 'react';
import AnimatedCharText from '../AnimatedCharText';
import { useDraggableScroll } from '../../hooks/useDraggableScroll';
import { testimonialsData } from '../../constants';

const TestimonialsSection: React.FC = () => {
    const draggableRef = useDraggableScroll<HTMLDivElement>();

    return (
        <section className="bg-black text-white py-20 overflow-hidden">
            <div className="px-6 lg:px-20 text-center">
                <AnimatedCharText text="Feedback" className="text-lg text-gray-400 mb-2" />
                <AnimatedCharText text="What our client says" className="text-5xl font-prata mb-12" />
            </div>
            <div
                ref={draggableRef}
                className="flex overflow-x-scroll pb-10 hide-scrollbar"
                style={{ scrollSnapType: 'x mandatory', scrollPadding: '0 2rem' }}
            >
                <div className="flex pl-[calc(50vw-40vw)] md:pl-[calc(50vw-30vw)]">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-[80vw] md:w-[60vw] max-w-4xl text-center px-4" style={{ scrollSnapAlign: 'center' }}>
                            <p className="text-2xl lg:text-3xl font-prata leading-snug">{`"${testimonial.quote}"`}</p>
                            <h4 className="mt-6 text-xl font-bold font-kanit">{testimonial.author}</h4>
                            <p className="text-gray-400">{testimonial.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
