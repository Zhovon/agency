import React, { useState, useEffect } from 'react';
import { portfolioData, blogData, marqueeItems } from './constants';
import Sidebar from './components/layout/Sidebar';
import OffCanvasMenu from './components/layout/OffCanvasMenu';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import StatsSection from './components/sections/StatsSection';
import WorkflowSection from './components/sections/WorkflowSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import BlogSection from './components/sections/BlogSection';
import BrandsSection from './components/sections/BrandsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import Marquee from './components/Marquee';
import PortfolioDetailPage from './components/pages/PortfolioDetailPage';
import BlogDetailPage from './components/pages/BlogDetailPage';
import BlogListPage from './components/pages/BlogListPage';
import NotFoundPage from './components/pages/NotFoundPage';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [location, setLocation] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setLocation(window.location.hash);
            const mainContent = document.querySelector('main');
            if (mainContent) {
                mainContent.scrollTo(0, 0); 
            }
        };
        
        // Handle scrolling to section on initial load with hash
        const currentHash = window.location.hash.replace('#','');
        if (currentHash && !currentHash.startsWith('/')) {
             setTimeout(() => {
                const section = document.getElementById(currentHash);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }


        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        const path = location.replace(/^#/, '');
        
        if (path.startsWith('/portfolio/')) {
            const slug = path.replace('/portfolio/', '');
            const item = portfolioData.find(p => p.slug === slug);
            return item ? <PortfolioDetailPage item={item} /> : <NotFoundPage />;
        }

        if (path.startsWith('/blog/')) {
            const slug = path.replace('/blog/', '');
            const post = blogData.find(p => p.slug === slug);
            return post ? <BlogDetailPage post={post} /> : <NotFoundPage />;
        }
        
        if (path === '/blog') {
            return <BlogListPage />;
        }

        // This is the main page
        if (path === '' || path === '/' || document.getElementById(path.replace('/',''))) {
            return (
                <>
                    <HeroSection />
                    <Marquee items={marqueeItems} />
                    <AboutSection />
                    <ServicesSection />
                    <StatsSection />
                    <WorkflowSection />
                    <PortfolioSection />
                    <TestimonialsSection />
                    <BlogSection />
                    <BrandsSection />
                    <ContactSection />
                </>
            );
        }

        return <NotFoundPage />;
    };

    return (
        <div className="bg-[#f3f3f3] text-black font-kanit">
            <Sidebar onMenuOpen={() => setIsMenuOpen(true)} />
            <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <main className="ml-20 md:ml-28">
                {renderPage()}
                <Footer />
            </main>
        </div>
    );
};

export default App;