import type { Service } from '../types';

// This data used to be in constants.ts. It's now served by our "API".
const servicesData: Service[] = [
    { num: "1", title: "Website Development & Hosting", desc: "Custom websites with domain, hosting, SSL, and ongoing support.", img: "https://picsum.photos/seed/service1/400/550" },
    { num: "2", title: "Digital Marketing", desc: "Social media growth, sales strategies, lead generation, and conversion optimization.", img: "https://picsum.photos/seed/service2/400/550" },
    { num: "3", title: "Social Media Management", desc: "Full account handling, daily posting, reels, captions, and audience engagement.", img: "https://picsum.photos/seed/service3/400/550" },
    { num: "4", title: "Paid Advertising (Meta & Google Ads)", desc: "Targeted ad campaigns to boost traffic, sales, and brand visibility.", img: "https://picsum.photos/seed/service4/400/550" },
    { num: "5", title: "Branding & Media Production", desc: "Logo design, brand kits, on-site product shoots, and promotional content creation.", img: "https://picsum.photos/seed/service5/400/550" } 
];

// This function simulates a network request.
// In a real application, this would be an actual fetch() call to your CMS.
export const getServices = (): Promise<Service[]> => {
    console.log("Fetching services from mock API...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Services fetched successfully.");
            resolve(servicesData);
        }, 1000); // Simulate a 1-second network delay
    });
};