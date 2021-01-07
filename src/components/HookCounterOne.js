import React ,{useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
// the second argument in useEffect will work as conditional rendering , 
// that is, it only updates when the count changes.
    useEffect(() =>{
        console.log('useEffect-updating document title')
        document.title = `clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value = {name} onChange = { e => setName(e.target.value)} />
            <button onClick = {()=> setCount(count+1)}>clciked {count} Times</button>
        </div>
    )
}

export default HookCounterOne
