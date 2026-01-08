import React from 'react';
import { Utensils, ShoppingBag } from 'lucide-react';

const OrderTypeToggle = ({ orderType, setOrderType }) => {
    return (
        <div className="flex justify-center py-8 sm:py-10 bg-brand-dark  top-20 z-40 backdrop-blur-sm bg-brand-dark/80 transition-all">
            <div className="flex bg-gray-900 border border-white/10 p-1.5 rounded-full relative shadow-inner">
                <button
                    onClick={() => setOrderType('dine-in')}
                    className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${orderType === 'dine-in'
                            ? 'text-white shadow-lg'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    <Utensils size={16} />
                    Dine In
                </button>

                <button
                    onClick={() => setOrderType('takeaway')}
                    className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${orderType === 'takeaway'
                            ? 'text-white shadow-lg'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    <ShoppingBag size={16} />
                    Takeaway
                </button>

                {/* Sliding Background */}
                <div
                    className={`absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-brand-orange to-red-500 transition-all duration-300 ease-out shadow-md
            ${orderType === 'dine-in' ? 'left-1.5 w-[calc(50%-6px)]' : 'left-[calc(50%+3px)] w-[calc(50%-6px)]'}
          `}
                />
            </div>
        </div>
    );
};

export default OrderTypeToggle;
