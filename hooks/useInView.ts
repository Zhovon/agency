
import { useState, useEffect, useRef, RefObject } from 'react';

interface InViewOptions extends IntersectionObserverInit {
    triggerOnce?: boolean;
}

export const useInView = <T extends HTMLElement,>(options?: InViewOptions): [RefObject<T>, boolean] => {
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const { triggerOnce = true, ...observerOptions } = options || {};
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (triggerOnce && ref.current) {
                    observer.unobserve(ref.current);
                }
            } else {
                if (!triggerOnce) {
                    setIsInView(false);
                }
            }
        }, observerOptions);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isInView];
};
