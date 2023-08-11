import React from 'react'
import TodoInput from './TodoInput'
import ButtonContainer from './Button'
import './TodoContainer.css'
import TodoItem from './todoItem'
import { TodoProvider } from './Context'

function TodoListContainer() {
    return (
        <TodoProvider>
            <div className='Container'>
                <TodoInput></TodoInput>
                <ButtonContainer></ButtonContainer>
                <TodoItem></TodoItem>
            </div>
        </TodoProvider>
    )
}

export default TodoListContainer
