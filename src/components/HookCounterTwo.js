import React, {useState} from 'react'

function HookCounterTwo() {
    const initialize = 0;

    const [count, setCount] = useState(initialize);

    const IncreamentFive =()=>{
        for(let i =0; i< 5; i++){
            setCount( prevCount => prevCount + 1 )
        }
    }

    return (
        <div>
            <h1>Counter {count} </h1>
            <button onClick= {()=> setCount(initialize)}>Reset</button>
            <button onClick = {()=> setCount(prevCount => prevCount+1)}>Increament</button>
            <button onClick = { () => setCount(prevCount => prevCount+1)}>Decreament</button>
            <button onClick ={()=>IncreamentFive()}>Increament by 5</button>
        </div>
    )
}

export default HookCounterTwo
