import React, { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';

const CustomCursor: React.FC = () => {
    const { cursorType } = useCursor();
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };
        
        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);
        
        const handleMouseOver = (e: MouseEvent) => {
            if (e.target instanceof Element && e.target.closest('a, button')) {
                setIsHoveringLink(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            if (e.target instanceof Element && e.target.closest('a, button')) {
                setIsHoveringLink(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseenter', onMouseEnter);
        document.body.addEventListener('mouseleave', onMouseLeave);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseenter', onMouseEnter);
            document.body.removeEventListener('mouseleave', onMouseLeave);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isVisible]);
    
    const finalCursorType = isHoveringLink ? 'hover' : cursorType;

    const cursorClasses = `fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-200 ease-out hidden md:block`;
    const cursorSize = finalCursorType === 'hover' ? 'w-16 h-16' : 'w-3 h-3';
    const cursorBg = finalCursorType === 'hover' ? 'bg-white mix-blend-difference' : 'bg-[#F08F42]';
    const opacity = isVisible ? 'opacity-100' : 'opacity-0';
    const scale = isVisible ? 'scale-100' : 'scale-0';

    return (
        <div 
            className={`${cursorClasses} ${cursorSize} ${cursorBg} ${opacity}`}
            style={{ 
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) ${scale}`
            }}
        />
    );
};

export default CustomCursor;
