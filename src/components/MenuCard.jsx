import React from 'react';
import { Plus, Flame, Sparkles } from 'lucide-react';

const MenuCard = ({ item, onClick }) => {
    return (
        <div
            onClick={() => onClick(item)}
            className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full cursor-pointer"
        >
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex gap-2">
                {item.isViral && (
                    <span className="bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg animate-pulse-slow">
                        <Sparkles size={10} /> VIRAL
                    </span>
                )}
                {item.isSpicy && (
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Flame size={10} /> SPICY
                    </span>
                )}
            </div>

            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10 opacity-60" />
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=random&color=fff&size=256`;
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow relative z-20">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-brand-orange transition-colors">
                        {item.name}
                    </h3>
                    <span className="text-lg font-bold text-brand-orange whitespace-nowrap">
                        AED {item.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow font-light">
                    {item.description}
                </p>

                <button
                    className="w-full bg-white text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300"
                >
                    <Plus size={18} />
                    View Details
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
