import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartList = ({ list ,onDeleteItem,onAddQuantity}) => {
    // console.log(list);
    return (
        <ul className="list-group list-group-flush">
            {list.map(o => <ShoppingCartItem 
                            item={o} 
                            key={o.id} 
                            onDeleteItem={onDeleteItem} 
                            onAddQuantity={onAddQuantity}
                    />)}
        </ul>
    )
}

export default ShoppingCartList
