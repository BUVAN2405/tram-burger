import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localData = localStorage.getItem('tram-burger-cart');
            return localData ? JSON.parse(localData) : [];
        } catch (e) {
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('tram-burger-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Prevent background scrolling when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Cleanup in case of component unmount
            return () => { document.body.style.overflow = 'unset'; };
        }
    }, [isCartOpen]);

    const addToCart = (product, quantity, selectedAddons) => {
        const addonsPrice = selectedAddons.reduce((acc, addon) => acc + addon.price, 0);
        const finalPrice = product.price + addonsPrice;

        // Create a unique ID for this specific combination of item + addons
        // Sorting addons ensures that order of selection doesn't create duplicate entries
        const addonIds = selectedAddons.map(a => a.id).sort().join('-');
        const uniqueId = `${product.id}-${addonIds}`;

        setCartItems(prev => {
            const existingItem = prev.find(item => item.uniqueId === uniqueId);
            if (existingItem) {
                return prev.map(item =>
                    item.uniqueId === uniqueId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, {
                ...product,
                uniqueId,
                selectedAddons,
                quantity,
                finalPrice: finalPrice // store unit price for this combo
            }];
        });

        setIsCartOpen(true);
    };

    const updateQuantity = (uniqueId, change) => {
        setCartItems(prev => prev.map(item => {
            if (item.uniqueId === uniqueId) {
                const newQty = item.quantity + change;
                if (newQty < 1) return item;
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const removeFromCart = (uniqueId) => {
        setCartItems(prev => prev.filter(item => item.uniqueId !== uniqueId));
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const closeCart = () => setIsCartOpen(false);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + (item.finalPrice * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            updateQuantity,
            removeFromCart,
            isCartOpen,
            toggleCart,
            closeCart,
            cartCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};
