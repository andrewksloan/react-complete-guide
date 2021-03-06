import React from 'react'
import Radium from 'radium'

import './Person.css'

// onClick here allows the child component (person) to change the state of the parent component (App)

const person = props => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" >
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old. </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}


export default Radium(person);