
import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedFadeInProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string;
}

const AnimatedFadeIn: React.FC<AnimatedFadeInProps> = ({ children, direction = 'up', delay = 0, className = '' }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

    const getTransform = (dir: 'up' | 'down' | 'left' | 'right') => {
        if (isInView) return 'translate(0, 0)';
        switch (dir) {
            case 'up': return 'translateY(50px)';
            case 'down': return 'translateY(-50px)';
            case 'left': return 'translateX(50px)';
            case 'right': return 'translateX(-50px)';
            default: return 'translateY(50px)';
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transition: `opacity 1.5s cubic-bezier(0.165, 0.84, 0.44, 1), transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)`,
                transitionDelay: `${delay}s`,
                opacity: isInView ? 1 : 0,
                transform: getTransform(direction),
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedFadeIn;
