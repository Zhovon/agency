import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import { navLinks } from '../../constants';

interface OffCanvasMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({ isOpen, onClose }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onClose();
        
        // Wait for menu animation to start before scrolling
        setTimeout(() => {
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClose();
         setTimeout(() => {
            const section = document.querySelector('#home');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    };

    return (
        <div className={`fixed inset-0 bg-[#212125] z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`flex flex-col md:flex-row h-full transition-all duration-500 ${isOpen ? '' : 'opacity-0'}`}>
                <div className={`w-full md:w-1/3 bg-[#1C1D20] p-8 sm:p-10 md:p-16 flex flex-col justify-between transition-transform duration-700 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div>
                        <a href="#home" onClick={handleHomeClick} className="text-white text-3xl font-prata font-bold mb-12 inline-block">ZHOVON</a>
                        <ul className="text-white space-y-6 font-kanit">
                            <li>
                                <p className="text-gray-400 text-sm uppercase">Phone</p>
                                <a href="tel:+1234567890" className="text-xl hover:text-[#F08F42] transition-colors">+1 234 567 890</a>
                            </li>
                            <li>
                                <p className="text-gray-400 text-sm uppercase">Email</p>
                                <a href="mailto:info@zhovon.com" className="text-xl hover:text-[#F08F42] transition-colors">info@zhovon.com</a>
                            </li>
                            <li>
                                <p className="text-gray-400 text-sm uppercase">Location</p>
                                <span className="text-lg">123 Creative Ave, Digital City</span>
                            </li>
                        </ul>
                    </div>
                    <p className="text-gray-400 text-sm mt-8">© All rights reserved by Zhovon</p>
                </div>
                <div className={`w-full md:w-2/3 p-8 sm:p-10 md:p-16 flex flex-col justify-center relative transition-transform duration-700 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                    <button onClick={onClose} className="absolute top-6 right-6 md:top-8 md:right-8 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#333337] flex items-center justify-center hover:bg-[#F08F42] transition-all duration-300">
                        <CloseIcon />
                    </button>
                    <nav>
                        <ul className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 space-y-4">
                            {navLinks.map(item => (
                                <li key={item.name}>
                                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="hover:text-white transition-colors duration-300">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasMenu;