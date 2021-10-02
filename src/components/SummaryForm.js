import React from 'react'

const SummaryForm = () => {
    return (
        <article className="checkout p-5">
            <h4 className="p-2 text-secondary">Summary</h4>
            <hr color="#868A93" />
            <p className="d-flex justify-content-between fw-bold fs-5 text-secondary p-2">
                <span>
                    ITEMS 3
                </span>
                <span>$132.00</span>
            </p>
            {/* shipping part  */}
            <h5 className="text-secondary text-uppercase p-2">shipping</h5>
            <select className="form-select mb-3">
                <option selected>Standart Delivery 5$</option>
                <option value={1}>Casa 10$</option>
                <option value={2}>Rabat 20$</option>
            </select>
            {/* coupon part  */}
            <h5 className="text-secondary text-uppercase p-2">Coupon code</h5>
            <input type="text" placeholder="ex: 42435FD " className="form-control" />
            <hr color="#868A93" />
            {/* total price */}
            <p className="d-flex justify-content-between fw-bold fs-5 text-secondary p-2">
                <span className="text-uppercase fs-5">
                    total price
                </span>
                <span>$132.00</span>
            </p>
            {/* register button */}
            <div className="d-grid gap-2">
                <button className="btn btn-primary text-uppercase btn-black" type="button">
                    register
                </button>
            </div>
        </article>
    )
}

export default SummaryForm
