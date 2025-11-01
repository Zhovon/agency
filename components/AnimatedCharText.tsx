
import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedCharTextProps {
    text: string;
    className: string;
    stagger?: number;
    once?: boolean;
}

const AnimatedCharText: React.FC<AnimatedCharTextProps> = ({ text, className, stagger = 0.02, once = true }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: once });
    
    return (
        <div ref={ref} className={className} aria-label={text}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="inline-block"
                    style={{
                        transition: `transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                        transitionDelay: `${isInView ? index * stagger : 0}s`,
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};

export default AnimatedCharText;
