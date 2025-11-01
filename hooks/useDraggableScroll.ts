
import { useRef, useEffect, RefObject } from 'react';

export const useDraggableScroll = <T extends HTMLElement,>(): RefObject<T> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let isDragging = false;
        let startPos = 0;
        let scrollLeftStart = 0;
        let lastPos = 0;
        let velocity = 0;
        let momentumID: number;

        element.style.cursor = 'grab';

        const getPositionX = (e: MouseEvent | TouchEvent): number => {
            return 'touches' in e ? e.touches[0].clientX : e.pageX;
        };

        const onDragStart = (e: MouseEvent | TouchEvent) => {
            isDragging = true;
            element.style.cursor = 'grabbing';
            element.style.userSelect = 'none';
            startPos = getPositionX(e);
            scrollLeftStart = element.scrollLeft;
            lastPos = startPos;
            velocity = 0;
            cancelAnimationFrame(momentumID);
            
            window.addEventListener('mousemove', onDragging);
            window.addEventListener('touchmove', onDragging, { passive: false });
            window.addEventListener('mouseup', onDragEnd, { once: true });
            window.addEventListener('touchend', onDragEnd, { once: true });
        };

        const onDragging = (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            if ('touches' in e) {
                e.preventDefault();
            }

            const currentPos = getPositionX(e);
            const walk = currentPos - startPos;
            element.scrollLeft = scrollLeftStart - walk;

            velocity = currentPos - lastPos;
            lastPos = currentPos;
        };
        
        const onDragEnd = () => {
            isDragging = false;
            element.style.cursor = 'grab';
            element.style.userSelect = 'auto';
            
            window.removeEventListener('mousemove', onDragging);
            window.removeEventListener('touchmove', onDragging);
            
            beginMomentum();
        };
        
        const beginMomentum = () => {
            cancelAnimationFrame(momentumID);
            momentumID = requestAnimationFrame(momentumLoop);
        };
        
        const momentumLoop = () => {
            element.scrollLeft -= velocity;
            velocity *= 0.95; // Damping factor
            if (Math.abs(velocity) > 0.5) {
                momentumID = requestAnimationFrame(momentumLoop);
            }
        };

        element.addEventListener('mousedown', onDragStart);
        element.addEventListener('touchstart', onDragStart, { passive: true });

        return () => {
            element.removeEventListener('mousedown', onDragStart);
            element.removeEventListener('touchstart', onDragStart);
            window.removeEventListener('mousemove', onDragging);
            window.removeEventListener('touchmove', onDragging);
            window.removeEventListener('mouseup', onDragEnd);
            window.removeEventListener('touchend', onDragEnd);
            cancelAnimationFrame(momentumID);
        };
    }, []);

    return ref;
};
