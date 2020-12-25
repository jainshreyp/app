import React from 'react'

const Rating = (props) => {

    const listItems = props.value.map((elem, index) => <p key={index}>{elem} and {index}</p>)
    return(
        <div className="bg-gray-300 w-full h-full">
            <p className="text-black">
                {listItems}
            </p>
            {/* <p className="text-3xl text-blue-500">{props.value}</p> */}
        </div>
    )
}

export default Rating