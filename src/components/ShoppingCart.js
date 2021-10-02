import React, { useState } from 'react'
import ShoppingCartList from './ShoppingCartList'
import SummaryForm from './SummaryForm'


const LIST_ORDERS = [
    {
        id: 1,
        title: "Cotton-T-Shirt 1",
        thumbnail: "https://media.sivasdescalzo.com/media/catalog" +
            "/product/M/S/MS21-TS-001-CLU_sivasdescalzo-Casablanca" +
            "-Tennis_Club_Icon_Screen_Printed_Tshirt-1619171837-1.jpg?" +
            "quality=90&fit=bounds&width=420",
        price: 20,
        quantity: 2,
        categoryName: "Shirt"
    },
    {
        id: 2,
        title: "Cotton-T-Shirt 2",
        thumbnail: "https://media.sivasdescalzo.com/media/catalog" +
            "/product/M/S/MS21-TS-001-CLU_sivasdescalzo-Casablanca" +
            "-Tennis_Club_Icon_Screen_Printed_Tshirt-1619171837-1.jpg?" +
            "quality=90&fit=bounds&width=420",
        price: 10,
        quantity: 3,
        categoryName: "Shirt"
    },
    {
        id: 3,
        title: "Cotton-T-Shirt 3",
        thumbnail: "https://media.sivasdescalzo.com/media/catalog" +
            "/product/M/S/MS21-TS-001-CLU_sivasdescalzo-Casablanca" +
            "-Tennis_Club_Icon_Screen_Printed_Tshirt-1619171837-1.jpg?" +
            "quality=90&fit=bounds&width=420",
        price: 13,
        quantity: 5,
        categoryName: "Shirt"
    }
]

function ShoppingCart() {

    const [orders, setOrders] = useState(LIST_ORDERS)

    const deleteOrderById = (orderId) => {

        //confirm with the user 
        if( !window.confirm("Are you sure ?") )
        return 

        //get a copy from the current list 
        let newOrders = [...orders]
        //change the copy : delete the seleted element
        newOrders = newOrders.filter((o)=>o.id != orderId)
        //update the state
        setOrders([...newOrders])
    }
    //add quantity
    const addQuantity = (orderId)=>{
        
        //get a copy from the current list 
        let newOrders = [...orders]
        //change the copy : delete the seleted element
        newOrders = newOrders.forEach((o)=>{
                if(o.id===orderId) o.quantity++
        })
        //update the state
        setOrders([...newOrders])
    }

    return (
        <>
            <article className="shopping-cart-list flex-grow-1 p-5 bg-white ">
                {/* the parent of h1 and input search  */}
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="text-capitalize">shopping cart</h1>
                    <div className="input-group w-25">
                        <input type="text" className="form-control" placeholder="Filter By Title" />
                        <div className="input-group-text">
                            <i className="fas fa-search" />
                        </div>
                    </div>
                </div>
                <hr color="#868A93" />
                {/* body of the shopping cart */}
                <ShoppingCartList list={orders} onDeleteItem={deleteOrderById} onAddQuantity={addQuantity}/>
            </article>
            {/* Summary */}
            <SummaryForm />
        </>
    )
}

export default ShoppingCart
