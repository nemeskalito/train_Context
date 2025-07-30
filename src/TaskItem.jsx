import { memo, useState } from 'react'
import './App.css'
const tasksRu = [
	'Фильтровать строки',
	'Искать слово',
	'Заменить слово',
	'Разделить строку',
	'Отсортировать массив',
	'Подсчитать слова',
	'Проверить наличие',
	'Создать объект',
	'Удалить повторения',
	'Объединить массивы',
	'Перевернуть строки',
	'Замапить элементы',
	'Отфильтровать массив',
	'Найти дубликаты',
	'Разбить строки',
	'Перевести слова',
	'Переименовать ключ',
	'Отформатировать вывод',
	'Извлечь данные',
	'Развернуть массив',
]
const TaskItem = () => {
	  console.log("TaskItem");

	const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой'])
	const addTask = () => {
		tasksRu.map(item => setTasks([...tasks, item]))
		tasksRu.pop()
	}

	const removeTask = () => {
		setTasks(tasks.slice(0, tasks.length - 1))
	}

	return (
		<div className='block'>
			<h3>Список задач</h3>
			<ul>
				{tasks.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			<div className='task__btn'>
				<button onClick={addTask}>Добавить задачу</button>
				<button onClick={removeTask}>Удалить последнюю задачу</button>
			</div>
		</div>
	)
}

export default memo(TaskItem)
