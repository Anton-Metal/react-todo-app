
import { useState } from 'react'
				
const AddTodo = ({ addTodoItem }) => {
	
	// en state variabel som kommer ihåg vad man har skrivit i text fälltet 
	const [title, setTitle] = useState('')

	return(

	<div>
		<input type="text" placeholder="Remember: SLAYER före tjejer" 
			onChange={event => setTitle(event.target.value)}/>
		<button onClick={() => addTodoItem(title)}> ADD </button>
				
	</div>

)}

export default AddTodo