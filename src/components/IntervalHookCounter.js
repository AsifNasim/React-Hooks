import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    // we can also use prevCount in setCount if we dont want to pass count to dependency array a
    // and it will work
    const tick =()=>{
        setCount(prevCount => prevCount+1)
    } 
 

    useEffect(()=>{
        // or we can use the function inside useEffect and that case dont forget to pass props in 
        // dependency array
        // const tick =()=>{
        //     setCount(count+1)
        // } 
        const interval = setInterval(tick, 1000);
        return ()=>{
            clearInterval(interval);
        }
    // },[count])
    },[])
   
    return (
        <div>
            <h1>Hook Count: {count}</h1>
        </div>
    )
}

export default IntervalHookCounter
