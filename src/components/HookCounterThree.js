import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName:''});

//    const changeHandler = e =>{
//         e.preventDefault();
//         setName({...name, [e.target.Name]: e.target.value});
//    } 
    return (
        <div>
            <input type ="text" 
            value = {name.firstName}
            onChange = {e => setName({...name, firstName:e.target.value})} 
            />
            <input type ="text" 
            value = {name.lastName}
            // onChange = {changeHandler} 
            onChange = {e => setName({...name, lastName:e.target.value})} 
            />
            <h2>First Name : {name.firstName}</h2>
            <h2>Last Name : {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
