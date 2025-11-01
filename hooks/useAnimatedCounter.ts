
import { useState, useEffect } from 'react';

export const useAnimatedCounter = (target: number, duration = 2000, startInView: boolean): number => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startInView) return;
        
        let start = 0;
        const startTime = Date.now();
        
        const animate = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
                const progress = elapsedTime / duration;
                setCount(Math.floor(target * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration, startInView]);

    return count;
};
