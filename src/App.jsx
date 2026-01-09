import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import OrderTypeToggle from './components/OrderTypeToggle';
import CategorySection from './components/CategorySection';
import CategoryGrid from './components/CategoryGrid';
import MenuGrid from './components/MenuGrid';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { MENU_DATA } from './data/menuData';

function App() {
  const [orderType, setOrderType] = useState('dine-in');
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].categoryId);
  const [viewMode, setViewMode] = useState('home'); // 'home' | 'menu'

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setViewMode('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-orange selection:text-white">
        <Header />

        <main>
          {/* --- MOBILE LAYOUT (Visible only on small screens) --- */}
          <div className="md:hidden">
            {viewMode === 'home' ? (
              <>
                <Hero />
                <OrderTypeToggle orderType={orderType} setOrderType={setOrderType} />
                <CategoryGrid onSelectCategory={handleCategorySelect} />
              </>
            ) : (
              <div className="animate-fade-in">
                <OrderTypeToggle orderType={orderType} setOrderType={setOrderType} />

                {/* Back Button & Navigation */}
                <div className="container mx-auto px-4 pt-4 sticky top-[136px] z-30 bg-brand-dark/95 backdrop-blur-md pb-2">
                  <button
                    onClick={() => setViewMode('home')}
                    className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
                  >
                    ← Back to Categories
                  </button>
                </div>

                <CategorySection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <MenuGrid activeCategory={activeCategory} />
              </div>
            )}
          </div>

          {/* --- DESKTOP LAYOUT (Visible only on medium screens and up) --- */}
          <div className="hidden md:block">
            <Hero />
            <OrderTypeToggle orderType={orderType} setOrderType={setOrderType} />
            <CategorySection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <MenuGrid activeCategory={activeCategory} />
          </div>
        </main>

        <Footer />
        <CartSidebar orderType={orderType} />
      </div>
    </CartProvider>
  );
}

export default App;
