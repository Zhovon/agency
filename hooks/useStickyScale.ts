
import { useState, useEffect, useRef, useCallback, RefObject, CSSProperties } from 'react';

export const useStickyScale = <C extends HTMLElement, T extends HTMLElement,>(): [RefObject<C>, RefObject<T>, CSSProperties] => {
    const containerRef = useRef<C>(null);
    const targetRef = useRef<T>(null);
    const [style, setStyle] = useState<CSSProperties>({});

    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const { top, height } = container.getBoundingClientRect();
        
        if (top > window.innerHeight || top + height < 0) {
            setStyle({
                 fontSize: '5vw',
                 lineHeight: '1',
                 opacity: 1,
                 transform: 'translateY(0px)',
                 willChange: 'font-size, opacity, transform',
            });
            return;
        }

        const scrollDistance = height - window.innerHeight;
        if (scrollDistance <= 0) return;

        const scrollProgress = Math.max(0, Math.min(1, -top / scrollDistance));

        const maxFontSize = 20; // vw
        const minFontSize = 5;  // vw
        
        const moveAndScaleEnd = 0.15;
        const scaleDownStart = 0.85;

        let fontSize;
        let opacity;
        let transform;
        const centerOffsetVh = 35;

        if (scrollProgress < moveAndScaleEnd) {
            const progress = scrollProgress / moveAndScaleEnd;
            fontSize = minFontSize + progress * (maxFontSize - minFontSize);
            transform = `translateY(${progress * centerOffsetVh}vh)`;
            opacity = 1;
        } else if (scrollProgress > scaleDownStart) {
            const progress = (scrollProgress - scaleDownStart) / (1 - scaleDownStart);
            fontSize = maxFontSize - progress * (maxFontSize - minFontSize);
            transform = `translateY(${centerOffsetVh}vh)`;
            opacity = 0.1 - (progress * 0.1);
        } else {
            fontSize = maxFontSize;
            transform = `translateY(${centerOffsetVh}vh)`;
            opacity = 0.1;
        }
        
        fontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize));
        
        setStyle({
            fontSize: `${fontSize}vw`,
            lineHeight: '1',
            opacity,
            transform,
            willChange: 'font-size, opacity, transform',
        });

    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return [containerRef, targetRef, style];
};
