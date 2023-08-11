import React from 'react'
import { useTodoContext } from './Context'
import { v4 as uuidv4 } from 'uuid';
import './Button.css'
function ButtonContainer() {
    const { todo, textInput, setTextInput, setTodo, renderList, setRenderList } = useTodoContext()
    const HandleAddBtn = () => {
        let newTodoList = [];
        newTodoList = [...todo, { id: uuidv4(), name: textInput, isCompleted: false }]
        setTodo(newTodoList)
        setRenderList(newTodoList)
        setTextInput('')
    }
    function DisplayAll() {
        setRenderList(todo)
    }
    function DisplayActive() {
        setRenderList(todo.filter(todo => todo.isCompleted === false))
    }
    function DisplayCompleted() {
        setRenderList(todo.filter(todo => todo.isCompleted === true))
    }

    return (
        <div className='ButtonContainer'>
            <div className='functionBtn'>
                <button className='btn' onClick={DisplayAll}>ALL</button>
                <button className='btn' onClick={DisplayActive}>ACTIVE</button>
                <button className='btn' onClick={DisplayCompleted}>COMPLETED</button>
            </div>
            <div className='functionBtn'>
                <button className='add' onClick={HandleAddBtn}>Add</button>
            </div>
        </div>
    )
}

export default ButtonContainer
