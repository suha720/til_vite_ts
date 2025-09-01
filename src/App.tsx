import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/shop/Cart';
import GoodList from './components/shop/GoodList';
import Wallet from './components/shop/Wallet';
import { ShopProvider } from './features/shop';
import HomePage from './pages/HomePage';
import GoodsPage from './pages/GoodsPage';
import CartPage from './pages/CartPage';
import WalletPage from './pages/WalletPage';
import NotFound from './pages/NotFound';
import type React from 'react';
import Calendar from './pages/Calendar';

const App = () => {
  const page: React.CSSProperties = {
    maxWidth: 960,
    margin: '0 auto',
    padding: 24,
    // background: 'cyan',
  };

  const grid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
  };

  const menu: React.CSSProperties = {
    display: 'flex',
    gap: 12,
    padding: 12,
    borderBottom: '1px solid #e5e7eb',
  };

  const link: React.CSSProperties = {
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #eee',
    textDecoration: 'none',
  };

  const active: React.CSSProperties = {
    fontWeight: 700,
    textDecoration: 'underline',
    color: 'hotpink',
  };
  return (
    <Router>
      <div style={page}>
        <nav style={menu}>
          <NavLink to={'/'} style={link}>
            {({ isActive }) => <span style={isActive ? active : undefined}>홈</span>}
          </NavLink>
          <NavLink to={'/goods'} style={link}>
            {({ isActive }) => <span style={isActive ? active : undefined}>제품목록</span>}
          </NavLink>
          <NavLink to={'/cart'} style={link}>
            {({ isActive }) => <span style={isActive ? active : undefined}>장바구니</span>}
          </NavLink>
          <NavLink to={'/wallet'} style={link}>
            {({ isActive }) => <span style={isActive ? active : undefined}>내지갑</span>}
          </NavLink>
        </nav>
        <h1>👀 나의 가게</h1>
        <Calendar/>
        <ShopProvider>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/goods" element={<GoodsPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/wallet" element={<WalletPage />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </ShopProvider>
      </div>
    </Router>
  );
};

export default App;
