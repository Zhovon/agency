import { PortfolioItem, BlogPost, Service } from './types';

export const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

export const marqueeItems = [ "Website Design & Development", "Social Media Marketing", "Search Engine Optimization (SEO)", "Meta & Google Ads Management", "Branding & Graphic Design", "Email Marketing", "Content Creation (Reels, Videos, Copy)" ];

export const servicesData: Service[] = [ 
    { num: "1", title: "Website Development & Hosting", desc: "Custom websites with domain, hosting, SSL, and ongoing support.", img: "https://picsum.photos/seed/service1/400/550" }, 
    { num: "2", title: "Digital Marketing", desc: "Social media growth, sales strategies, lead generation, and conversion optimization.", img: "https://picsum.photos/seed/service2/400/550" }, 
    { num: "3", title: "Social Media Management", desc: "Full account handling, daily posting, reels, captions, and audience engagement.", img: "https://picsum.photos/seed/service3/400/550" }, 
    { num: "4", title: "Paid Advertising (Meta & Google Ads)", desc: "Targeted ad campaigns to boost traffic, sales, and brand visibility.", img: "https://picsum.photos/seed/service4/400/550" }, 
    { num: "5", title: "Branding & Media Production", desc: "Logo design, brand kits, on-site product shoots, and promotional content creation.", img: "https://picsum.photos/seed/service5/400/550" } 
];

export const workflowData = [
    { step: '01', title: 'Consultation', desc: 'Reach out to discuss your goals and requirements.' },
    { step: '02', title: 'Strategy & Planning', desc: 'We create a custom strategy tailored to your business.' },
    { step: '03', title: 'Execution', desc: 'Our team brings the plan to life with precision and speed.' },
    { step: '04', title: 'Launch & Support', desc: 'We launch your project and offer ongoing support.' } 
];

export const portfolioData: PortfolioItem[] = [ 
    { slug: "amc-medical-complex", img: "https://picsum.photos/seed/p1/800/1000", title: "AMC – Medical Complex", date: "February 6, 2024", description: "A comprehensive website development project for a leading medical complex, focusing on patient experience and accessibility. The site features an intuitive appointment booking system and detailed service listings." }, 
    { slug: "alpha-global-ms", img: "https://picsum.photos/seed/p2/800/600", title: "Alpha Global MS – (BPO) & Healthcare Administration", date: "February 6, 2024", description: "Developed a corporate branding and digital presence for a major BPO and healthcare administration firm. The project included a new logo, brand guidelines, and a professional website to attract enterprise clients." }, 
    { slug: "elevate-work-pro", img: "https://picsum.photos/seed/p3/800/600", title: "Elevate Work Pro – Automotive Services", date: "February 6, 2024", description: "Created a high-octane social media marketing campaign and website for an automotive services company, resulting in a 150% increase in online bookings and customer engagement." }, 
    { slug: "helrish-perfume", img: "https://picsum.photos/seed/p4/800/1000", title: "Helrish – Perfume Brand", date: "February 6, 2024", description: "Launched an elegant e-commerce platform for a luxury perfume brand. The site focuses on visual storytelling and a seamless checkout experience to drive online sales." }, 
    { slug: "tech-innovate", img: "https://picsum.photos/seed/p5/800/1000", title: "Tech Innovate", date: "March 15, 2024", description: "Complete digital marketing strategy for a tech startup, including SEO, content marketing, and paid advertising to build brand awareness and generate investor interest." }, 
    { slug: "greenscape-landscaping", img: "https://picsum.photos/seed/p6/800/600", title: "GreenScape Landscaping", date: "April 22, 2024", description: "A visually rich website for a landscaping company, designed to showcase their beautiful portfolio and attract high-value residential and commercial clients." }, 
    { slug: "quantum-solutions", img: "https://picsum.photos/seed/p7/800/600", title: "Quantum Solutions", date: "May 1, 2024", description: "Branding and website for a cutting-edge tech consultancy. The design reflects their innovative approach with a modern, clean aesthetic and clear communication of complex services." }, 
    { slug: "apex-construction", img: "https://picsum.photos/seed/p8/800/1000", title: "Apex Construction", date: "June 18, 2024", description: "Developed a robust online presence for a construction company, highlighting their major projects through a professional portfolio and improving lead generation through targeted SEO." }, 
];

export const testimonialsData = [ 
    { quote: "Zhovon's team is a game-changer. Their digital marketing strategies doubled our online engagement in just a few months.", author: "Jane Doe", company: "CEO, Innovate Inc." }, 
    { quote: "The new website is stunning and functional. We've seen a significant increase in conversions since the launch.", author: "John Smith", company: "Marketing Director, Solutions Co." }, 
    { quote: "Professional, creative, and results-driven. Working with them was a pleasure from start to finish.", author: "Emily White", company: "Founder, Startup Hub" }, 
    { quote: "The attention to detail and commitment to our brand's vision was outstanding. Highly recommend Zhovon!", author: "Michael Chen", company: "Owner, Artisan Goods" }, 
    { quote: "Their SEO work put us on the first page of Google. The results speak for themselves.", author: "Sarah Lee", company: "Manager, Local Eats" }, 
];

export const brandsData = [ 
    "https://picsum.photos/seed/brand1/200/100?grayscale", 
    "https://picsum.photos/seed/brand2/200/100?grayscale", 
    "https://picsum.photos/seed/brand3/200/100?grayscale", 
    "https://picsum.photos/seed/brand4/200/100?grayscale", 
    "https://picsum.photos/seed/brand5/200/100?grayscale", 
    "https://picsum.photos/seed/brand6/200/100?grayscale", 
];

export const blogData: BlogPost[] = [ 
    {slug: "more-leads-facebook-ads", img: "https://picsum.photos/seed/blog1/800/600", category: "Digital Marketing", date: "October 4, 2025", title: "How to get more leads with Facebook ads", content: "Facebook ads remain one of the most powerful tools for lead generation. This guide covers how to define your target audience, create compelling ad copy, design eye-catching visuals, and optimize your campaign for maximum ROI."}, 
    {slug: "guide-to-local-seo", img: "https://picsum.photos/seed/blog2/800/600", category: "SEO", date: "October 4, 2025", title: "The ultimate guide to Local SEO services", content: "For businesses with a physical location, local SEO is non-negotiable. We'll walk you through optimizing your Google Business Profile, building local citations, and gathering reviews to dominate local search results."}, 
    {slug: "instagram-marketing-tips", img: "https://picsum.photos/seed/blog3/800/600", category: "Social Media", date: "October 4, 2025", title: "Top Instagram marketing tips for new brands", content: "Instagram is a visual powerhouse for new brands. Learn how to leverage Reels, Stories, and high-quality feed posts to build a community, engage with your audience, and drive traffic to your website."}, 
];