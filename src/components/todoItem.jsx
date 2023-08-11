import React from 'react'
import './todoItem.css'
import { useTodoContext } from './Context'
function TodoItem() {
    const { todo, handleCompleted, renderList, setRenderList, setTodo } = useTodoContext()
    console.log('render', renderList);
    console.log('todo', todo);
    const HandleDelete = (todoItem) => {
        console.log(todoItem.id);
        const deleteItem = todo.filter(item => item.id !== todoItem.id)
        setRenderList(deleteItem)
        setTodo(deleteItem)
    }
    return (
        <div className='todoList'>
            {renderList.map((item) => {
                return (
                    <div key={item.id} className={item.isCompleted ? 'TodoItemCotainerDark' : 'TodoItemCotainer'}>
                        <div style={{ marginLeft: `10px`, fontSize: '20px' }}>
                            <input type="checkbox" className='checkbox' checked={item.isCompleted} onClick={() => { handleCompleted(item) }} />
                            {item.name}
                        </div>
                        <button className='DeleteBtn' onClick={() => { HandleDelete(item) }}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default TodoItem
