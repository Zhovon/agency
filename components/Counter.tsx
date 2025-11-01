
import React from 'react';
import { useInView } from '../hooks/useInView';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

interface CounterProps {
    target: number;
    suffix?: string;
    className?: string;
    textClassName: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix, className, textClassName }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.5, triggerOnce: true });
    const count = useAnimatedCounter(target, 2000, isInView);

    return (
        <div ref={ref} className={className}>
            <span className={textClassName}>{`${count}${suffix || ''}`}</span>
        </div>
    );
};

export default Counter;
