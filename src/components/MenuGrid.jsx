import React, { useState } from 'react';
import MenuCard from './MenuCard';
import ProductModal from './ProductModal';
import { MENU_DATA } from '../data/menuData';

const MenuGrid = ({ activeCategory }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const categoryData = MENU_DATA.find(cat => cat.categoryId === activeCategory);

    if (!categoryData) return (
        <div className="text-white text-center py-20">Category not found</div>
    );

    return (
        <section id="menu-section" className="py-8 md:py-12 bg-brand-dark min-h-screen">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-6 md:mb-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            {categoryData.categoryName}
                        </h2>
                        <p className="text-sm md:text-base text-gray-400">
                            {categoryData.items.length} tasty items available
                        </p>
                    </div>
                    {/* Decorative line */}
                    <div className="hidden md:block h-px bg-white/10 flex-grow ml-8 mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange to-transparent w-1/2 animate-shimmer" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {categoryData.items.map((item, index) => (
                        <div
                            key={item.id}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <MenuCard item={item} onClick={setSelectedItem} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Modal */}
            {selectedItem && (
                <ProductModal
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </section>
    );
};

export default MenuGrid;
