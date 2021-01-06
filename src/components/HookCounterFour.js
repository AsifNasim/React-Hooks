import React, {useState}from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([]);

    const addItem = () =>{
        setItems([...items, {
            id:items.length,
            // it will generate random value between 1-10
            values: Math.floor(Math.random()*10) + 1
        }])
    }

    return (
        <div>
            <button onClick = {addItem}> Gen Random Number</button>
            <ul>
                {items.map(item => (
                    <li key = {item.id}>{item.values}</li>
                ))}
            </ul>        
        </div>
    )
}

export default HookCounterFour
