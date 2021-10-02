import React from 'react'
import "./App.css"
import ShoppingCartList from './components/ShoppingCartList'
import SummaryForm from './components/SummaryForm'

const App = () => {
  return (
    <main className="container border mt-5 p-4">
      <section className="shopping-cart d-flex mx-auto">
        {/* Shopping cart  */}
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
         <ShoppingCartList/>
        </article>
        {/* Summary */}
       <SummaryForm/>
      </section>
    </main>

  )
}

export default App
