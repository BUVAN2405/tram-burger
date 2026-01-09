import React from 'react';
import { MENU_DATA } from '../data/menuData';

const CategoryGrid = ({ onSelectCategory }) => {
    return (
        <section id="category-grid" className="py-8 md:py-16 bg-brand-dark container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center uppercase tracking-tighter">
                Browse Menu
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {MENU_DATA.map((category) => {
                    // Use the first item's image as the category cover, or a fallback
                    const coverImage = category.items[0]?.image || '/placeholder.png';

                    return (
                        <div
                            key={category.categoryId}
                            onClick={() => onSelectCategory(category.categoryId)}
                            className="group cursor-pointer flex flex-col items-center"
                        >
                            {/* Card Image Container */}
                            <div className="w-full aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden relative border border-white/5 group-hover:border-brand-orange/50 transition-all duration-300 shadow-lg group-hover:shadow-brand-orange/20">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
                                <img
                                    src={coverImage}
                                    alt={category.categoryName}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${category.categoryName}&background=random&color=fff&size=256`;
                                    }}
                                />

                                {/* Overlay Title for Mobile Clarity (Optional, matching KFC style which has text below) */}
                                {/* We will put text below to match KFC style strictly */}
                            </div>

                            {/* Title Below */}
                            <h3 className="mt-4 text-sm md:text-xl font-bold text-white uppercase tracking-wider text-center group-hover:text-brand-orange transition-colors">
                                {category.categoryName}
                            </h3>
                            <div className="h-1 w-12 bg-white/10 rounded-full mt-2 group-hover:bg-brand-orange transition-colors" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CategoryGrid;
