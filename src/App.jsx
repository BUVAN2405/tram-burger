import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import OrderTypeToggle from './components/OrderTypeToggle';
import CategorySection from './components/CategorySection';
import MenuGrid from './components/MenuGrid';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { MENU_DATA } from './data/menuData';

function App() {
  const [orderType, setOrderType] = useState('dine-in');
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].categoryId);

  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-orange selection:text-white">
        <Header />

        <main>
          <Hero />
          <OrderTypeToggle orderType={orderType} setOrderType={setOrderType} />
          <CategorySection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          <MenuGrid activeCategory={activeCategory} />
        </main>

        <Footer />
        <CartSidebar orderType={orderType} />
      </div>
    </CartProvider>
  );
}

export default App;
