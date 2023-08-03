import React from 'react'
import '../styels/wish.css'
import Product from './Product'
import { Link } from 'react-router-dom'

function Wishlist(props) {
    const wishlish = props.wish
    console.log(wishlish)


    return (
        <div>
            <div className="cart-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-heading class<mb-10">My wishlist</div>
                            <div className="table-wishlist">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th width="45%">Product Name</th>
                                            <th width="15%">Unit Price</th>

                                            <th width="15%">Stock Status</th>
                                            <th width="15%"></th>
                                            <th width="10%"></th>
                                        </tr>
                                    </thead>
                                    {
                                        wishlish?.map((wish) => {
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <td width="45%">
                                                            <div className="display-flex align-center">
                                                                <div className="img-product">
                                                                    <img src={wish.image} />
                                                                </div>
                                                                <div className="name-product">
                                                                    {wish.name }
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td width="15%" className="price">{wish.price }</td>
                                                        <td width="15%"><span className="in-stock-box">In Stock</span></td>
                                                        <td width="15%"><button className="round-black-btn small-btn">Add to Cart</button></td>
                                                        <td width="10%" className="text-center"><Link href="#" className="trash-icon"><i className="far fa-trash-alt"></i></Link></td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist