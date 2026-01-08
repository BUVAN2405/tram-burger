import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';

const CartSidebar = ({
    isOpen,
    onClose,
    cartItems,
    updateQuantity,
    removeItem,
    orderType
}) => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={`fixed right-0 top-0 h-full w-full sm:w-[450px] bg-[#121212] border-l border-white/10 z-[70] flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-brand-dark/50 backdrop-blur-md">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        My Order
                        <span className="flex items-center justify-center w-6 h-6 text-xs font-bold bg-brand-orange text-white rounded-full">
                            {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
                        </span>
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Order Type Banner */}
                <div className="bg-gradient-to-r from-gray-900 to-brand-dark p-4 border-b border-white/5">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Order Type:</span>
                        <span className="text-brand-orange font-bold uppercase tracking-wider bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                            {orderType === 'dine-in' ? '🍽️ Dine In' : '🥡 Takeaway'}
                        </span>
                    </div>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-600 gap-6 animate-fade-in">
                            <div className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center">
                                <span className="text-4xl text-gray-700">🛒</span>
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-bold text-gray-300">Your cart is empty</p>
                                <p className="text-sm text-gray-500 mt-2">Add some tasty burgers!</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="px-6 py-2 border border-brand-orange text-brand-orange rounded-full hover:bg-brand-orange hover:text-white transition-all"
                            >
                                Go to Menu
                            </button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="flex gap-4 p-4 bg-gray-900/50 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-all group">
                                {/* Image Thumbnail */}
                                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-white/5">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=random&color=fff&size=256`;
                                        }}
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start gap-2">
                                        <h4 className="font-bold text-white text-sm leading-tight line-clamp-2">{item.name}</h4>
                                        <p className="font-bold text-brand-orange shrink-0">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    <div className="flex justify-between items-end mt-3">
                                        <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/10">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-7 h-7 flex items-center justify-center rounded bg-white/5 hover:bg-white/20 text-white transition-colors"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm font-bold w-8 text-center text-white">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-7 h-7 flex items-center justify-center rounded bg-white/5 hover:bg-white/20 text-white transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                            title="Remove item"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 bg-brand-dark/95 border-t border-white/10 backdrop-blur-xl space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-400 text-sm">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-400 text-sm">
                            <span>Tax (5%)</span>
                            <span>${(total * 0.05).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-end pt-2 border-t border-white/10">
                            <span className="text-lg font-bold text-white">Total</span>
                            <span className="text-3xl font-bold text-brand-orange">${(total * 1.05).toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        className="w-full bg-gradient-to-r from-brand-orange to-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                        disabled={cartItems.length === 0}
                        onClick={() => alert('Order Placed! The kitchen is cooking...')}
                    >
                        Generic Checkout
                        <ArrowRight size={20} />
                    </button>
                </div>
            </aside>
        </>
    );
};

export default CartSidebar;
