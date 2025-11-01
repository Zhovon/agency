import React from 'react';
import { blogData } from '../../constants';
import type { BlogPost } from '../../types';
import AnimatedFadeIn from '../AnimatedFadeIn';
import AnimatedCharText from '../AnimatedCharText';

const BlogListPage: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen py-20 px-6 sm:p-10 lg:p-20">
            <header className="text-center mb-16">
                 <AnimatedCharText text="Our Blog" className="text-5xl md:text-7xl font-prata mb-4" />
                 <AnimatedFadeIn>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay updated with the latest trends in digital marketing, design, and technology. Here are our latest articles and insights.</p>
                 </AnimatedFadeIn>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((post: BlogPost, index: number) => (
                    <AnimatedFadeIn key={post.slug} delay={index * 0.1}>
                        <a href={`/#/blog/${post.slug}`} className="group block">
                            <div className="overflow-hidden rounded-lg mb-6 shadow-md">
                                <img src={post.img} alt={post.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="text-left">
                                <p className="text-gray-500 text-sm font-kanit mb-2">
                                    <span>{post.category}</span> / <span>{post.date}</span>
                                </p>
                                <h3 className="text-2xl font-prata group-hover:text-[#F08F42] transition-colors">{post.title}</h3>
                            </div>
                        </a>
                    </AnimatedFadeIn>
                ))}
            </div>
             <div className="text-center mt-16">
                 <a href="/#home" className="inline-block bg-[#F08F42] text-black font-bold py-4 px-8 rounded-full hover:bg-black hover:text-white transition-colors">Back to Home</a>
            </div>
        </div>
    );
};

export default BlogListPage;
