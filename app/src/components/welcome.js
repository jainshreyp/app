import React from 'react'

const Welcome = (props) => {
    return(
        <div>
            <p>{props.value[0]}</p>
            {props.value.forEach(element => {
            <p>{element}</p>
        })}
        </div>
    )
}

export default Welcome