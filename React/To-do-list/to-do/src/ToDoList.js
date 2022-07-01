import React from 'react'
import Todo from './Todo.js';

export default function ToDoList({todos, toggleToDo}) {
    return (
        <div>
            { todos.map(todo => {
               return <Todo key={todo.id} todo={todo} toggleToDo={toggleToDo}></Todo>
            }) }
        </div>
    )
    }