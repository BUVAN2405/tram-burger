import React from 'react';
import { Utensils, ShoppingBag } from 'lucide-react';

const OrderTypeToggle = ({ orderType, setOrderType }) => {
    return (
        <div className="sticky top-16 md:top-20 z-40 transform transition-all duration-300 flex justify-center py-4 md:py-10 bg-brand-dark/95 backdrop-blur-md border-b md:border-none border-white/5 shadow-lg md:shadow-none">
            <div className="flex bg-gray-900 border border-white/10 p-1 md:p-1.5 rounded-full relative shadow-inner scale-90 md:scale-100 origin-center">
                <button
                    onClick={() => setOrderType('dine-in')}
                    className={`relative z-10 flex items-center gap-2 px-5 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${orderType === 'dine-in'
                        ? 'text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                        }`}
                >
                    <Utensils size={14} className="md:w-4 md:h-4" />
                    Dine In
                </button>

                <button
                    onClick={() => setOrderType('takeaway')}
                    className={`relative z-10 flex items-center gap-2 px-5 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${orderType === 'takeaway'
                        ? 'text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                        }`}
                >
                    <ShoppingBag size={14} className="md:w-4 md:h-4" />
                    Takeaway
                </button>

                {/* Sliding Background */}
                <div
                    className={`absolute top-1 bottom-1 md:top-1.5 md:bottom-1.5 rounded-full bg-gradient-to-r from-brand-orange to-red-500 transition-all duration-300 ease-out shadow-md
            ${orderType === 'dine-in' ? 'left-1 md:left-1.5 w-[calc(50%-4px)] md:w-[calc(50%-6px)]' : 'left-[calc(50%+2px)] md:left-[calc(50%+3px)] w-[calc(50%-4px)] md:w-[calc(50%-6px)]'}
          `}
                />
            </div>
        </div>
    );
};

export default OrderTypeToggle;
