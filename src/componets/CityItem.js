import React from 'react'

const CityItem = ({name,onDeleteItem,id}) => 
    <li>
        {name} 
    <button 
        onClick={()=>onDeleteItem(id)}>X</button></li>



export default CityItem
