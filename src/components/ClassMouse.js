import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }

    logMousePosition = e =>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }

    componentDidMount(){
       console.log('component Did Mount')
        window.addEventListener('mousemove', this.logMousePosition);
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePosition);
    }
    
    render() {
       
        return (
            
            <div>
                
                X_Coordinate - {this.state.x} Y_Coordinate- {this.state.y}
            </div>
        )
    }
}

export default ClassMouse
