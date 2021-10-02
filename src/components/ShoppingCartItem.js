import React from 'react'

const ShoppingCartItem = () => {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between p-0 mb-2 pb-3 pt-3">
            {/* left part  */}
            <div className="d-flex align-items-center">
                <img src="https://media.sivasdescalzo.com/media/catalog/product/M/S/MS21-TS-001-CLU_sivasdescalzo-Casablanca-Tennis_Club_Icon_Screen_Printed_Tshirt-1619171837-1.jpg?quality=90&fit=bounds&width=420" alt="tshirt" width={90} height={90} />
                <p className="m-2">
                    <span style={{ color: '#868A93' }}>Shirt</span>
                    <br />
                    <span>Cotton-T-shirt</span>
                </p>
            </div>
            {/* middle part manage quantity */}
            <div className="d-flex justify-content-center align-items-center" style={{ width: 'fit-content' }}>
                <button type="button" className="btn btn-outline-primary">-</button>
                <input type="number" className="form-control w-25 text-center m-1" defaultValue={0} />
                <button type="button" className="btn btn-outline-primary">+</button>
            </div>
            {/* price part  */}
            <p className="m-0">$ 44.00</p>
            {/* delete button */}
            <button className="btn btn-danger">
                <i className="fas fa-trash-alt" />
            </button>
        </li>
    )
}

export default ShoppingCartItem
