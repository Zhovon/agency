export interface Service {
    num: string;
    title: string;
    desc: string;
    img: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface PortfolioItem {
    slug: string;
    img: string;
    title: string;
    date: string;
    description: string;
}

export interface BlogPost {
    slug: string;
    img: string;
    category: string;
    date: string;
    title: string;
    content: string; // Markdown content for the detail page
}