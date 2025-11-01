import React from 'react';
import HamburgerIcon from '../icons/HamburgerIcon';

interface SidebarSocialLinkProps {
    children: React.ReactNode;
    href: string;
}

const SidebarSocialLink: React.FC<SidebarSocialLinkProps> = ({ children, href }) => (
    <a href={href} className="text-white/50 hover:text-white transition-colors text-sm font-kanit transform -rotate-90 whitespace-nowrap">
        {children}
    </a>
);

interface SidebarProps {
    onMenuOpen: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuOpen }) => {
    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.querySelector('#home');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="fixed top-0 left-0 h-screen w-20 md:w-28 bg-[#121212] z-40 flex flex-col justify-between items-center py-10 border-r border-white/10">
            <a href="#home" onClick={handleHomeClick} className="text-white text-2xl md:text-3xl font-prata font-bold -rotate-90 whitespace-nowrap">ZHOVON</a>
            <button onClick={onMenuOpen} className="text-white z-50 p-4 rounded-full hover:bg-white/10 transition-colors">
                <HamburgerIcon />
            </button>
            <div className="hidden md:flex flex-col space-y-12">
                <SidebarSocialLink href="#">Facebook</SidebarSocialLink>
                <SidebarSocialLink href="#">Instagram</SidebarSocialLink>
                <SidebarSocialLink href="#">LinkedIn</SidebarSocialLink>
            </div>
        </aside>
    );
};

export default Sidebar;