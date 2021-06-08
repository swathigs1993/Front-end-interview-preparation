import './App.css';
import {React, useState} from 'react';

function App() {
  const [fruits, setFruits] = useState([{id:1, name: 'Apple', selected: false},
  {id:2, name: 'Mango', selected: false},
  {id:3, name: 'Berry', selected: false},
  {id:4, name: 'Orange', selected: false}]);
  
  function handleOnchange(id) {
     debugger;
     let newFruits = [...fruits];
     let selectedFruit = newFruits.find(fruit => fruit.id == id);
     selectedFruit.selected = !selectedFruit.selected;
     setFruits(newFruits);
  }
  return (
    <div>
      <p> Hello</p>
       {
         
         fruits.map(fruit => {
            return <div>
             <label>{fruit.name}</label>
             <input type="checkbox" onChange={()=>handleOnchange(fruit.id)}/>
            </div>
         })
       }

{
         
         fruits.map(fruit => {
            return fruit.selected ? <p>{fruit.name}</p> : ''
         })
       }
       

    </div>
  );
}

export default App;
