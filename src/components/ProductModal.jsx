import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ item, onClose }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [closing, setClosing] = useState(false);

    // Reset state when item changes
    useEffect(() => {
        setQuantity(1);
        setSelectedAddons([]);
        setClosing(false);
    }, [item]);

    if (!item) return null;

    const handleClose = () => {
        setClosing(true);
        setTimeout(onClose, 300); // Wait for animation
    };

    const toggleAddon = (addon) => {
        if (selectedAddons.find(a => a.id === addon.id)) {
            setSelectedAddons(prev => prev.filter(a => a.id !== addon.id));
        } else {
            setSelectedAddons(prev => [...prev, addon]);
        }
    };

    const totalPrice = (item.price + selectedAddons.reduce((acc, curr) => acc + curr.price, 0)) * quantity;

    const handleAddToCart = () => {
        addToCart(item, quantity, selectedAddons);
        handleClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}
                onClick={handleClose}
            />

            {/* Modal */}
            <div
                className={`
                    relative w-full md:w-[600px] h-[90vh] md:h-auto md:max-h-[90vh] 
                    bg-[#121212] rounded-t-3xl md:rounded-3xl 
                    shadow-2xl overflow-hidden flex flex-col
                    transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${closing ? 'translate-y-full md:scale-95 md:opacity-0' : 'translate-y-0 md:scale-100 md:opacity-100'}
                `}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-all"
                >
                    <X size={24} />
                </button>

                {/* Content Scrollable Area */}
                <div className="overflow-y-auto custom-scrollbar flex-1 pb-24 md:pb-0">
                    {/* Image Header */}
                    <div className="relative h-48 md:h-72 w-full bg-gray-900">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=random&color=fff&size=256`;
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 p-4 md:p-8">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 leading-tight">
                                {item.name}
                            </h2>
                            <p className="text-brand-orange text-lg md:text-xl font-bold">
                                AED {item.price.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="px-4 md:px-8 space-y-6 md:space-y-8 mt-4 md:mt-6">
                        {/* Description & Ingredients */}
                        <div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                                {item.description}
                            </p>
                            {item.ingredients && item.ingredients.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {item.ingredients.map((ing, idx) => (
                                        <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                                            {ing}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Add-ons */}
                        {item.addons && item.addons.length > 0 && (
                            <div>
                                <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                                    Customize your meal
                                    <span className="text-xs font-normal text-gray-500">(Optional)</span>
                                </h3>
                                <div className="space-y-2 md:space-y-3 pb-6">
                                    {item.addons.map(addon => {
                                        // Logic to hide other choice options if one is selected
                                        const isChoice = addon.name.startsWith('Choice:');
                                        const selectedChoice = selectedAddons.find(a => a.name.startsWith('Choice:'));

                                        // If this is a choice addon, and a choice is already selected, AND strictly it is NOT this specific addon (so we don't hide the selected one itself)
                                        // Then don't render it.
                                        if (isChoice && selectedChoice && selectedChoice.id !== addon.id) {
                                            return null;
                                        }

                                        return (
                                            <label
                                                key={addon.id}
                                                className={`
                                                flex items-center justify-between p-3 md:p-4 rounded-xl border cursor-pointer transition-all
                                                ${selectedAddons.find(a => a.id === addon.id)
                                                        ? 'bg-brand-orange/10 border-brand-orange text-white'
                                                        : 'bg-gray-900/50 border-white/5 text-gray-400 hover:bg-gray-800'
                                                    }
                                            `}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`
                                                    w-4 h-4 md:w-5 md:h-5 rounded border flex items-center justify-center transition-colors
                                                    ${selectedAddons.find(a => a.id === addon.id)
                                                            ? 'bg-brand-orange border-brand-orange'
                                                            : 'border-gray-500'
                                                        }
                                                `}>
                                                        {selectedAddons.find(a => a.id === addon.id) && <Plus size={12} className="md:w-3.5 md:h-3.5 text-white" />}
                                                    </div>
                                                    <span className="font-medium text-sm md:text-base">{addon.name}</span>
                                                </div>
                                                <span className="font-bold text-brand-orange text-sm md:text-base">
                                                    + AED {addon.price.toFixed(2)}
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    onChange={() => toggleAddon(addon)}
                                                    checked={!!selectedAddons.find(a => a.id === addon.id)}
                                                />
                                            </label>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 md:p-8 border-t border-white/10 bg-[#121212] md:bg-[#121212]/95 backdrop-blur-xl z-10 w-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-0">
                        {/* Quantity Counter */}
                        <div className="flex items-center bg-gray-900 rounded-xl p-1 border border-white/10 h-12 md:h-14">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 md:w-12 h-full flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
                            >
                                <Minus size={16} className="md:w-[18px] md:h-[18px]" />
                            </button>
                            <span className="w-8 md:w-12 text-center text-lg md:text-xl font-bold text-white">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-10 md:w-12 h-full flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
                            >
                                <Plus size={16} className="md:w-[18px] md:h-[18px]" />
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-brand-orange text-white font-bold h-12 md:h-14 rounded-xl flex items-center justify-center gap-2 md:gap-3 hover:bg-orange-600 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] text-sm md:text-base"
                        >
                            <span>Add to Cart</span>
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/40" />
                            <span>AED {totalPrice.toFixed(2)}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
