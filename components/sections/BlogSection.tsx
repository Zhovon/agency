import React from 'react';
import AnimatedCharText from '../AnimatedCharText';
import AnimatedFadeIn from '../AnimatedFadeIn';
import { blogData } from '../../constants';

const BlogSection: React.FC = () => {
    return (
        <section id="blog" className="bg-white text-black py-20 px-6 lg:px-20">
            <div className="text-center">
                <AnimatedCharText text="From our blog" className="text-lg text-gray-500 mb-2 uppercase tracking-widest" />
                <AnimatedCharText text="Latest news & articles" className="text-5xl font-prata mb-12" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((post, index) => (
                    <AnimatedFadeIn key={post.slug} delay={index * 0.1}>
                        <a href={`/#/blog/${post.slug}`} className="group block">
                            <div className="overflow-hidden rounded-lg mb-6">
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
                 <a href="/#/blog" className="btn-circle bg-black text-white rounded-full w-40 h-40 flex items-center justify-center text-center mx-auto hover:bg-[#F08F42] hover:text-black transition-colors">View<br /> all posts</a>
            </div>
        </section>
    );
};

export default BlogSection;
