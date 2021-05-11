import { useState } from 'react'
import AddTodo from './AddTodo'
import './TodoList.css'

const TodoList = () => {

	// en state variabeln för listan för state items 
	const [todoList, setTodoList] = useState([
	{ id: 1, title: 'Metal till death', isDone: false},
	{ id: 2, title: 'Headbanging till the end of time', isDone: false},
	{ id: 3, title: 'Blast metal louder than HELL', isDone: true}
])

	// lägga till en todo
	const addTodoItem = title => {
		// för att sätta den nya listan, alltså det man har skrivt 
		// ny lista som inerhåller en kopia av gamla todolist, och sen sätter man in det nya element där 
		setTodoList( [...todoList, { id: todoList.length + 1, title: title, isDone: false }
		
		] )

	}

	// för att markera vilket element är färdigt 
	const markAsdone = id => {
		//gå in i listan och ändra på ett element 
		//	ta en helt ny lista, alltås ta en kopia av en lista och ändra i den
		setTodoList(todoList.map(todoItem => {
			if( todoItem.id === id ) {
//för varje todoItem så ska man antingen retunera objektet oförändrat eller så ska objektet ändras 
// 				isdone byter ut det nya värdet från den exakta kopian, den nya väret blir true 
				return {...todoItem, isDone: true}

			} else {
				return todoItem
			}
		}))
	}

// rendera elementen i listan
// omvandla listan med data till en lista vi kan skriva ut
//alltså omvandla listan till jsx
	const jsxLIst = todoList.map(todoItem => (
		//så fort man joobar med listor så ska man ha key på det elementet som upprepas 
		<li key={todoItem.id} className={todoItem.isDone ? 'done' : ''}> 
		{todoItem.title} 			
		{todoItem.isDone ? null : <button onClick={() => markAsdone(todoItem.id)}>Done</button>}
		</li>
	))
	
	

	return(

	<div className="todo-list">
		<ul>

			{jsxLIst}
		
		</ul>

		<AddTodo addTodoItem={addTodoItem}/>

	</div>
)}



export default TodoList