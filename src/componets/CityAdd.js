import React, { useRef } from 'react'

const CityAdd = ({onAddCity}) => {
    
    const inputRef = useRef()

    const f = () => {
        let inputValue=inputRef.current.value;
        inputRef.current.value=""
        onAddCity(inputValue) 
    }


    return (
        <>
            <h1>City App</h1>
            <input ref={inputRef} type="text" placeholder="add city name" />
            <button onClick={f}>Add</button>
        </>
    )
}

export default CityAdd
