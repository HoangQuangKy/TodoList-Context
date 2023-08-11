import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => {
    return useContext(TodoContext)
};
export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [renderList, setRenderList] = useState([])
    const handleCompleted = (item) => {
        const updatedList = todo.map((todoItem) => {
            if (todoItem.id === item.id) {
                return { ...todoItem, isCompleted: !todoItem.isCompleted };
            }
            return todoItem
        });
        setTodo(updatedList)
        setRenderList(updatedList)
    }

    const contextValue = {
        todo,
        textInput,
        setTextInput,
        setTodo,
        handleCompleted,
        renderList,
        setRenderList
    };

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};