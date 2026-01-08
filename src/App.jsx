import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OrderTypeToggle from './components/OrderTypeToggle';
import CategorySection from './components/CategorySection';
import MenuGrid from './components/MenuGrid';
import CartSidebar from './components/CartSidebar';
import { MENU_DATA } from './data/menuData';

function App() {
  const [orderType, setOrderType] = useState('dine-in');
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].categoryId);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Prevent background scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true); // Auto open cart on add for better UX? Or just show badge. User didn't specify, but often good. Let's do it.
  };

  const updateQuantity = (itemId, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQty = item.quantity + change;
        if (newQty < 1) return item; // Cannot go below 1
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (itemId) => {
    setCartItems(prev => prev.filter(i => i.id !== itemId));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-orange selection:text-white">
      <Header cartCount={cartCount} onToggleCart={toggleCart} />

      <main>
        <Hero />
        <OrderTypeToggle orderType={orderType} setOrderType={setOrderType} />
        <CategorySection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <MenuGrid activeCategory={activeCategory} onAddToCart={handleAddToCart} />
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            TRAM <span className="text-brand-orange">BURGER</span>
          </h2>
          <div className="flex justify-center gap-6 mb-8 text-gray-400">
            <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-orange transition-colors">TikTok</a>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Tram Burger International. All rights reserved.
          </p>
        </div>
      </footer>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        orderType={orderType}
      />
    </div>
  );
}

export default App;
