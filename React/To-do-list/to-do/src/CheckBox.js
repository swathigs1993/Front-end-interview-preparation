import {React, useState} from 'react'

export default function CheckBox() {

    const [fruits, setFruits]= useState([{id:1 ,name: 'Apple', selected: false},{id:2 ,name: 'Mango', selected: false},{id:3 ,name: 'Banana', selected: false}]);
    
    function handleChange(f) {
        debugger;
        let newFruit = [...fruits];
        let target = newFruit.find(fruit => f.id === fruit.id);
        target.selected = !target.selected;
        setFruits(newFruit);
    }
    return (
        <div>
        {
        fruits.map(fruit => {
            return <div>
            <label>{fruit.name}</label>
            <input type="checkbox" onChange={() => handleChange(fruit)}></input>
            </div>
        })
        }
        {
        fruits.map(fruit => {
            return fruit.selected ? <span>{fruit.name}</span> : ''
        })
        }
        </div>
    )
}
        
      