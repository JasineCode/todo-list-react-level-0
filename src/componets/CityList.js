import React from 'react'
import CityItem from './CityItem'

const CityList = ({ list }) => {
    return (

        <ul>
            {list.map((c,index) => <CityItem key={index} name={c} />)}
        </ul>

    )
}

export default CityList
