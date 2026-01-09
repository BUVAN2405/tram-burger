import React from 'react';
import { MENU_DATA } from '../data/menuData';

const CategorySection = ({ activeCategory, setActiveCategory }) => {
    return (
        <section className="py-4 md:py-8 bg-brand-dark container mx-auto px-4 sticky top-28 md:static z-30 bg-brand-dark/95 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-6 text-center md:text-left">Our Menu</h2>
            <div className="flex overflow-x-auto pb-4 md:pb-0 gap-3 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4 no-scrollbar snap-x">
                {MENU_DATA.map((cat) => (
                    <button
                        key={cat.categoryId}
                        onClick={() => setActiveCategory(cat.categoryId)}
                        className={`
              group flex-shrink-0 snap-center flex flex-col items-center justify-center px-6 py-3 md:p-4 rounded-xl border transition-all duration-300 min-w-[120px] md:min-w-0
              ${activeCategory === cat.categoryId
                                ? 'bg-brand-orange text-white border-brand-orange shadow-[0_0_15px_rgba(255,107,0,0.3)] scale-105'
                                : 'bg-gray-900 text-gray-400 border-white/10 hover:border-brand-orange/50 hover:text-white hover:bg-gray-800'
                            }
            `}
                    >
                        {/* We could add icons here if we had them mapped, but text logic is required */}
                        <span className="text-sm md:text-base font-semibold text-center whitespace-nowrap">
                            {cat.categoryName}
                        </span>
                        <div className={`h-1 w-6 md:w-8 rounded-full mt-2 transition-all ${activeCategory === cat.categoryId ? 'bg-white' : 'bg-transparent group-hover:bg-brand-orange'}`} />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
