const CartBlock = ({ cart, changeCount, removeCount }) => {
  return cart.map((item) => (
    <div key={item.id} className="cart__info">
      <p>
        {item.title} (Кол-во: {item.count})
      </p>
      <div className="cart__btn">
        <button onClick={() => changeCount(item.id)}>+1</button>
        <button onClick={() => removeCount(item.id)}>Удалить</button>
      </div>
    </div>
  ));
};

export default CartBlock;
