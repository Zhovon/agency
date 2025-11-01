import React from 'react';
import type { BlogPost } from '../../types';
import AnimatedFadeIn from '../AnimatedFadeIn';

interface BlogDetailPageProps {
    post: BlogPost;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ post }) => {
    return (
        <div className="bg-[#f3f3f3] text-black min-h-screen p-6 sm:p-10 lg:p-20">
             <AnimatedFadeIn>
                <a href="/#blog" className="text-gray-600 hover:text-black transition-colors mb-8 inline-block">← Back to Blog</a>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.1}>
                <p className="text-gray-500 font-kanit uppercase tracking-wider">{post.category}</p>
                <h1 className="text-5xl md:text-7xl font-prata my-4">{post.title}</h1>
                <p className="text-lg text-gray-500 mb-8">{post.date}</p>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.2}>
                <div className="my-12">
                    <img src={post.img} alt={post.title} className="w-full h-auto object-cover rounded-lg shadow-lg"/>
                </div>
            </AnimatedFadeIn>

            <AnimatedFadeIn delay={0.3}>
                 <div className="max-w-4xl mx-auto text-lg text-gray-800 leading-relaxed font-kanit space-y-6">
                    <p>{post.content}</p>
                </div>
            </AnimatedFadeIn>
        </div>
    );
};

export default BlogDetailPage;