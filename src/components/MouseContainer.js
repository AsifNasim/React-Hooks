import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick = {()=>setDisplay(!display)}>Toggle Display</button>
            {/* calling short circuit method */}
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
