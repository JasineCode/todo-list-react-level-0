import React from 'react'
import CityItem from './CityItem'

const CityList = ({ list, onDeleteList }) => {
    return (

        <ul>
            {list?.map((c, index) => <CityItem
                    key={index}
                    name={c}
                    onDeleteItem={onDeleteList}
                    id={index}
                />
            )}
        </ul>

    )
}

export default CityList
