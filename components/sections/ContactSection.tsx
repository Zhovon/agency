import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import AnimatedCharText from '../AnimatedCharText';
import AnimatedFadeIn from '../AnimatedFadeIn';
import type { ContactFormData } from '../../types';

const IdeaSpark: React.FC = () => {
    const [businessType, setBusinessType] = useState('');
    const [ideas, setIdeas] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateIdeas = async () => {
        if (!businessType.trim()) {
            setError('Please enter a business type.');
            return;
        }
        setIsLoading(true);
        setError('');
        setIdeas([]);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const prompt = `Generate 3 concise, creative digital marketing ideas for a ${businessType}. Each idea should be a short, actionable sentence. Format the output as a numbered list.`;
            
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
            });

            const text = response.text;
            const generatedIdeas = text.split('\n').filter(idea => idea.trim() !== '' && idea.match(/^\d\./)).map(idea => idea.replace(/^\d\.\s*/, ''));
            setIdeas(generatedIdeas);

        } catch (err) {
            console.error(err);
            setError('Sorry, something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#F08F42] p-8 rounded-lg text-center text-black mb-16">
            <h3 className="text-3xl font-prata mb-4">Spark an Idea</h3>
            <p className="max-w-xl mx-auto mb-6">Not sure where to start? Enter your business type below and get instant digital marketing ideas powered by AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g., Coffee Shop, Law Firm, etc."
                    className="flex-grow bg-white/50 border border-black/20 text-black placeholder-black/60 rounded-full py-3 px-6 outline-none focus:ring-2 focus:ring-black transition"
                />
                <button
                    onClick={handleGenerateIdeas}
                    disabled={isLoading}
                    className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Generating...' : 'Get Ideas'}
                </button>
            </div>
            {error && <p className="mt-4 text-red-900">{error}</p>}
            {ideas.length > 0 && (
                <div className="mt-8 text-left max-w-lg mx-auto bg-white/30 p-6 rounded-lg">
                    <ul className="space-y-4 list-disc list-inside">
                        {ideas.map((idea, index) => (
                            <li key={index}>{idea}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [formError, setFormError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        setFormError('');

        try {
            const response = await fetch('https://formspree.io/f/mldpvanl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Thank you! Your message has been sent.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (error) {
            setStatus('');
            setFormError('Oops! Something went wrong. Please try again.');
        }
    };

    return (
        <section id="contact" className="bg-[#1C1D20] text-white py-20 px-6 lg:px-20">
            <AnimatedFadeIn>
                <IdeaSpark />
            </AnimatedFadeIn>
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                    <AnimatedCharText text="Have a project?" className="text-lg text-gray-400 mb-2" />
                    <AnimatedCharText text="Let's get in touch" className="text-5xl font-prata mb-8" />
                    <AnimatedFadeIn>
                        <p className="text-gray-400 mb-10">We’re here to help you achieve your digital goals. Fill out the form or use our contact details to start the conversation.</p>
                        <ul className="space-y-6 font-kanit">
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
                    </AnimatedFadeIn>
                </div>
                <div className="lg:w-1/2">
                    <AnimatedFadeIn>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-600 focus:border-[#F08F42] py-3 text-white outline-none transition-colors" />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-600 focus:border-[#F08F42] py-3 text-white outline-none transition-colors" />
                            </div>
                            <div>
                                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-transparent border-b border-gray-600 focus:border-[#F08F42] py-3 text-white outline-none transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" className="inline-block bg-[#F08F42] text-black font-bold py-4 px-8 rounded-full hover:bg-white transition-colors disabled:bg-gray-400" disabled={status === 'Sending...'}>
                                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                            </button>
                             {status && status !== 'Sending...' && <p className="mt-4 text-green-400">{status}</p>}
                             {formError && <p className="mt-4 text-red-500">{formError}</p>}
                        </form>
                    </AnimatedFadeIn>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;