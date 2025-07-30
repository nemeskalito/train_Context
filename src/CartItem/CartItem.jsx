import { memo, useContext, useState } from 'react'
import '../App.css'
import CartBlock from './CartBlock'
import ThemeContext from '../ThemeContext'

const CartItem = () => {
	const { isDark, setIsDark } = useContext(ThemeContext)
	const [cart, setCart] = useState([
		{ id: 1, title: 'Футболка', count: 1 },
		{ id: 2, title: 'Кепка', count: 2 },
		{ id: 3, title: 'Шорты', count: 2 },
		{ id: 4, title: 'Джинсы', count: 2 },
		{ id: 5, title: 'Кофта', count: 2 },
	])

	const themeClick = () => {
		setIsDark({ ...isDark, cartItem: !isDark.cartItem })
	}

	const changeCount = id => {
		setCart(
			cart.map(item =>
				item.id == id ? { ...item, count: item.count + 1 } : item
			)
		)
	}

	const removeCount = id => {
		setCart(cart.filter(item => item.id !== id))
	}

	const clearCartItem = () => {
		setCart([])
	}

	return (
		<div className={`block ${isDark.cartItem ? 'light' : 'dark'}`}>
			<button className='theme__btn' onClick={themeClick}>
				Сменить тему
			</button>
			<h3>Корзина товаров</h3>
			<CartBlock
				cart={cart}
				changeCount={changeCount}
				removeCount={removeCount}
			/>
			<button onClick={clearCartItem}>Очистить корзину</button>
		</div>
	)
}

export default memo(CartItem)
