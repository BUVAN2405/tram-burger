import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header = ({ cartCount, onToggleCart }) => {
    return (
        <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <h1 className="text-3xl font-bold tracking-tighter text-white group-hover:scale-105 transition-transform">
                        TRAM <span className="text-brand-orange">BURGER</span>
                    </h1>
                </div>

                <button
                    onClick={onToggleCart}
                    className="relative p-2 text-white hover:text-brand-orange transition-colors group"
                >
                    <ShoppingBag size={28} className="group-hover:drop-shadow-[0_0_8px_rgba(255,107,0,0.5)] transition-all" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-brand-orange rounded-full border-2 border-brand-dark animate-pulse-slow">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
