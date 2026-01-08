import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                   By TR <span className="text-brand-orange">BURGER</span>
                </h2>
                <div className="flex justify-center gap-6 mb-8 text-gray-400">
                    <a href="https://www.instagram.com/tram.burgers/" className="hover:text-brand-orange transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">TikTok</a>
                </div>
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} By TR Burger International. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
