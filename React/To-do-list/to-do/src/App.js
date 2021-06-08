import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import CheckBox from './CheckBox';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setToDo] = useState([]);
  const toDoInputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setToDo(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleToDo(id) {
    let newToDos = [...todos];
    let selected = newToDos.find(todo => todo.id == id);
    selected.completed = !selected.completed;
    setToDo(newToDos);
  }

  function handleOnToDo() {
    const name = toDoInputRef.current.value;
    if(name === '') return;
    let randomeNum = Math.random();
    setToDo(prevVal => {
       return [...prevVal, {id: randomeNum, name: name, completed: false}];
    });
    toDoInputRef.current.value = null;
  }

  function handleClearToDo() {
    let newToDos = [...todos];
    let cleared = newToDos.filter(todo => !todo.completed);
    setToDo(cleared);
  }

  return (
    <>
    <ToDoList todos = {todos} toggleToDo={toggleToDo}/>
    <input ref={toDoInputRef} type="text"/>
    <button onClick={handleOnToDo}>Add To Do</button>
    <button onClick={handleClearToDo}>Clear To Dos</button>
    <div>{todos.filter(todo => !todo.completed ).length} items left</div>


    <CheckBox/>
    </>
  );
}

export default App;
