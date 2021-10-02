import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartList = () => {
    return (
        <ul className="list-group list-group-flush">
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
        </ul>
    )
}

export default ShoppingCartList
