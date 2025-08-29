import Cart from '../components/shop/Cart';

const CartPage = () => {
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
      <h2>장바구니</h2>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
