import { memo, useContext, useState } from 'react'
import './App.css'
import ThemeContext from './ThemeContext'

const UserInfo = () => {
	console.log('UserInfo')
	const { isDark, setIsDark } = useContext(ThemeContext)

	const themeClick = () => {
		setIsDark({ ...isDark, userInfo: !isDark.userInfo })
	}

	const [user, setUser] = useState({
		name: 'Иван',
		age: 25,
		isActive: true,
	})
	const nameChangeClick = () => {
		const name = user.name == 'Игорь' ? 'Иван' : 'Игорь'
		setUser({ ...user, name })
	}
	const ageChangeClick = () => {
		const age = ++user.age
		setUser({ ...user, age })
	}
	const activeChangeClick = () => {
		const isActive = !user.isActive
		setUser({ ...user, isActive })
	}
	return (
		<div className={`block ${isDark.userInfo ? 'light' : 'dark'}`}>
			<button className='theme__btn' onClick={themeClick}>
				Сменить тему
			</button>
			<h3>Профиль пользователя</h3>
			<p>Имя: {user.name}</p>
			<p>Возраст: {user.age}</p>
			<p>Активность: {user.isActive ? 'да' : 'нет'}</p>
			<div className='user__btn'>
				<button onClick={nameChangeClick}>Сменить имя</button>
				<button onClick={ageChangeClick}>Увеличить возраст</button>
				<button onClick={activeChangeClick}>Переключить активность</button>
			</div>
			<br />
			<br />
		</div>
	)
}

export default memo(UserInfo)
