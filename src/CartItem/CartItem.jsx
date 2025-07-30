import { memo, useState } from "react";
import "../App.css";
import CartBlock from "./CartBlock";

const CartItem = () => {
  console.log("CartItem");
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
    { id: 3, title: "Шорты", count: 2 },
    { id: 4, title: "Джинсы", count: 2 },
    { id: 5, title: "Тишка", count: 2 },
  ]);

  const changeCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id == id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const removeCount = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCartItem = () => {
    setCart([]);
  };

  return (
    <div className="block">
      <h3>Корзина товаров</h3>
      <CartBlock
        cart={cart}
        changeCount={changeCount}
        removeCount={removeCount}
      />
      <button onClick={clearCartItem}>Очистить корзину</button>
    </div>
  );
};

export default memo(CartItem);
