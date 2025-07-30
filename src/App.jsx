import './App.css'
import UserInfo from './UserInfo'
import TaskItem from './TaskItem'
import CartItem from './CartItem/CartItem'
import ThemeContext from './ThemeContext'
import { useEffect, useState } from 'react'

function App() {
	const [isDark, setIsDark] = useState({
		userInfo: true,
		taskItem: true,
		cartItem: true,
	})
	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<UserInfo />
			<TaskItem />
			<CartItem />
		</ThemeContext.Provider>
	)
}

export default App
