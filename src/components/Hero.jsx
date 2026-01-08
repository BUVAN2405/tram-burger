import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-black z-0" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px]" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-6 tracking-wider uppercase backdrop-blur-sm border border-brand-orange/20">
                    Premium Fast Food
                </span>
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-tight drop-shadow-2xl">
                   By TR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600">BURGER</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-300 mb-10 font-light tracking-wide max-w-2xl mx-auto">
                    Next Stop: Pure Flavor.
                </p>
                <a
                    href="#menu-section"
                    className="group relative inline-flex items-center gap-3 bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] hover:-translate-y-1"
                >
                    Order Now
                    <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
