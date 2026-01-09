import React from 'react';
import { MENU_DATA } from '../data/menuData';

const CategorySection = ({ activeCategory, setActiveCategory }) => {
    return (
        <section className="py-8 bg-brand-dark container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-6 text-center md:text-left">Our Menu</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {MENU_DATA.map((cat) => (
                    <button
                        key={cat.categoryId}
                        onClick={() => setActiveCategory(cat.categoryId)}
                        className={`
              group flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300
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
                        <div className={`h-1 w-8 rounded-full mt-2 transition-all ${activeCategory === cat.categoryId ? 'bg-white' : 'bg-transparent group-hover:bg-brand-orange'}`} />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
