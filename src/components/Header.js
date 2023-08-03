import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../context/AuthContext';


function Header(props) {
    const userContext = useContext(AuthContext)
    return (
        <div>
            <header className="header header-in tro-clearance header-4">
                <div className="header-top">
                    <div className="container Sign" >
                        <div className="header-left  ">
                            <Link href="tel:#"><i className="icon-phone"></i>Call: +92 307 75 44 598</Link>
                        </div>

                        <div className="header-right " >

                            <ul className="top-menu">
                                <li>
                                    <ul>
                                        <li> {userContext.user?.role === "user"} <Link to="/login" data-toggle="modal">Log in  / Sign up</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <Link href="index.html" className="logo">
                                <img src="assets/images/demos/demo-4/logo.png" width="105" height="25" />
                                {/* <img src="assets/images/demos/demo-4/logo.png" alt="Molla Logo" width="105" height="25"/> */}
                            </Link>
                        </div>

                        <div className="header-center">
                            <div className="header-search header-search-extended header-search-visible d-none d-lg-block mx-auto">
                                <Link href="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper search-wrapper-wide">
                                        <label for="q" className="sr-only">Search</label>
                                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="header-right">

                            {/* <div className="wishlist">
                                <Link to="/wishlist" title="Wishlist">
                                    <div className="icon">
                                        <i className="icon-heart-o"></i>
                                        {props.wish.length}
                                    </div>
                                    <p>Wishlist</p>
                                </Link>
                            </div> */}
                            {
                                console.log(props.cart)
                            }
                            <div className='mb-2 mx-2 ' >
                                <Link to="/wishlist">
                                    <span className="badge rounded-pill badge-notification  mx-3 "> {props.wish.length}</span>
                                    <img width="28" height="28" src="https://cdn-icons-png.flaticon.com/512/2/2267.png" alt="shopping-cart--v1" />
                                    <p>Wishlist</p>
                                </Link>

                            </div>
                            <div className='mb-2 mx-2 ' >
                                <Link to="/cart">
                                    <span className="badge rounded-pill badge-notification  mx-3 ">{props.cart.length}</span>
                                    <img width="28" height="28" src="https://img.icons8.com/pastel-glyph/30/shopping-cart--v1.png" alt="shopping-cart--v1" />
                                    <p>Cart</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='navbarCustom'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/shop">Shop</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/contact">Contact</Link>
                                </li>

                            </ul>

                        </div>
                        {/* <div>
            <Link to='/login' className='btn btn-primary mx-2'>Login</Link>
            <Link to='/signup' className='btn btn-primary mx-2'>signup</Link>
            <Link to='/logout' className='btn btn-primary mx-2'>LogOut</Link>
          </div> */}
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Header