import React from 'react'
import './todoInput.css'
import { useTodoContext } from './Context'
function TodoInput() {
    const { todo, textInput, setTextInput } = useTodoContext()
    const handleChange = (e) => {
        setTextInput(e.target.value)
    }
    return (
        <div>
            <div className='InputTitle'>
                <h1 className='title'>TO DO LIST</h1>
            </div>
            <div className='inputForm'>
                <input type="text" placeholder='Enter new task' className='todoInput' value={textInput} onChange={handleChange} />
            </div>
        </div>
    )
}

export default TodoInput
