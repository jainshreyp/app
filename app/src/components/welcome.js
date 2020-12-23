import React from 'react'

const Welcome = (props) => {
    return(
        <div className="bg-gray-300 px-auto">
            <p>{props.value}</p>
            {props.value.forEach(element => {
                <p>{element}</p>
            })}
        </div>
    )
}

export default Welcome