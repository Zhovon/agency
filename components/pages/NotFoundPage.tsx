import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-2xl">Page Not Found</p>
                <a href="/" className="mt-4 inline-block bg-[#F08F42] text-black font-bold py-2 px-6 rounded-full hover:bg-black hover:text-white transition-colors">Go Home</a>
            </div>
        </div>
    );
};

export default NotFoundPage;
