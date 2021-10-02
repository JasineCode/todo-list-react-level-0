import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartList = ({ list ,onDeleteItem}) => {
    // console.log(list);
    return (
        <ul className="list-group list-group-flush">
            {list.map(o => <ShoppingCartItem 
                            item={o} 
                            key={o.id} 
                            onDeleteItem={onDeleteItem} 
                    />)}
        </ul>
    )
}

export default ShoppingCartList
