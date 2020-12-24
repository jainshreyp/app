import React from 'react'

const Welcome = (props) => {
    return(
        <div className="bg-gray-300 px-auto">
            <p>{props.value.map = (elem) => {
                return(<p className="text-3xl text-blue-500">{elem}</p>)
            }}</p>
            <p className="text-3xl text-blue-500">{props.value}</p>
        </div>
    )
}

export default Welcome