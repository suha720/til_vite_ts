import { useShopSelectors } from '../../features/shop';
import { useShop } from '../../features/shop/hooks/useShop';

const Cart = () => {
  const { balance, cart, removeCartOne, resetCart, clearCart, buyAll, addCart } = useShop();

  const { getGood, total } = useShopSelectors();

  const box: React.CSSProperties = {
    border: '20px solid #eee',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    background: '#fff',
  };

  const boxrow: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  };

  return (
    <div style={box}>
      <h2>💤 장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비었습니다</p>
      ) : (
        <ul>
          {cart.map(item => {
            // 제품 찾기
            const good = getGood(item.id);
            // tsx 출력
            return (
              <li key={item.id} style={boxrow}>
                <div>
                  <strong>{good?.name}</strong> x {item.qty}
                  <div>
                    {/* 옵션으로 ! 느낌표를 사용해서 날 믿고 undefined 없다는 것을 믿어달라고함 */}
                    {good?.price.toLocaleString()} x {item.qty} ={' '}
                    {(good!.price * item.qty).toLocaleString()}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => addCart(item.id)}>➕</button>
                  <button onClick={() => removeCartOne(item.id)}>➖</button>
                  <button onClick={() => clearCart(item.id)}>제품취소</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>총액</strong>
        <strong>{total.toLocaleString()}</strong>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={buyAll}>전체 구매하기</button>
        <button onClick={resetCart}>전체 취소하기</button>
      </div>
    </div>
  );
};

export default Cart;
