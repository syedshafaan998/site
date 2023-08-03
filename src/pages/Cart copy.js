import React from 'react'
import { Link } from 'react-router-dom'
function Cart(props) {
  console.log(props.cart)
  const cart = props.cart

  return (


    <div>
      <section className="h-100" style={{ backgroundColor: "#eee;" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0"><span className="text-muted">Sort by: <select><option>Price</option><option>Name</option><option>Brand</option></select> </span> <Link href="#!" className="text-body"> <i
                    className="fas fa-angle-down mt-1"></i></Link></p>
                  <button onClick={() => { props.removeCartAll() }} className="btn btn-danger mt-4 me-2">Clear All</button>

                </div>
              </div>

              {
                cart?.map((product) => {
                  return (
                    <div className="card rounded-3 mb-4">
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={product.image}
                              className="img-fluid rounded-3" alt="Cotton T-shirt" />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{product.name}</p>
                            <p><span className="text-muted">{product.brand} </span></p>
                            <p><span className="text-muted">{product.details} </span></p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value="2" type="number"
                              className="form-control form-control-sm" />

                            <button className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">{product.price}</h5>
                          </div>

                          <div>
                            <svg onClick={() => { props.removeFromCart(props.product) }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgba(245, 0, 0, 0.9)", transform: "msFilter" }}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                  )
                })
              }



              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input type="text" id="form1" className="form-control form-control-lg" />
                    <label className="form-label" for="form1">Discound code</label>
                  </div>
                  <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart