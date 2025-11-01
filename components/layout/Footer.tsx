import React from 'react';

const Footer: React.FC = () => {
    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.querySelector('#home');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#121212] text-white py-10 px-6 lg:px-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-4 md:mb-0">
                    <a href="#home" onClick={handleHomeClick} className="text-white text-4xl font-prata font-bold">ZHOVON</a>
                    <p className="text-gray-400 mt-2 font-kanit">Creative Solutions, Digital Growth.</p>
                </div>
                <div className="text-gray-400 font-kanit">
                    <p>© {new Date().getFullYear()} Zhovon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;