import Cart from '../components/shop/Cart';
import GoodList from '../components/shop/GoodList';

const GoodsPage = () => {
  const box: React.CSSProperties = {
    padding: 16,
    border: '1px solide #e5e7eb',
    borderRadius: 12,
    background: '#fafafa',
    marginTop: 12,
    textAlign: 'center',
  };
  return (
    <div style={box}>
      <h2>💤 판매 제품 리스트</h2>
      <GoodList />
      <Cart />
    </div>
  );
};

export default GoodsPage;
