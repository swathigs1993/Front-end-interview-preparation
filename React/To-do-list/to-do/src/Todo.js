import React from 'react'

export default function todo({todo, toggleToDo}) {
    function handleOnChange() {
        toggleToDo(todo.id);
    }

    return (
        <div>
            <label>
            {todo.name}
            </label>
            <input type="checkbox" checked={todo.completed} onChange={handleOnChange}/>
        </div>
    )
}
