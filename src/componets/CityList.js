import React from 'react'
import CityItem from './CityItem'

const CityList = ({ list, onDeleteList }) => {
    return (

        <ul>
            {list?.map((c) => <CityItem
                    key={c.id}
                    name={c.name}
                    onDeleteItem={onDeleteList}
                    id={c.id}
                />
            )}
        </ul>

    )
}

export default CityList
