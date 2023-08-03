import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"
import Product from './Product';
import thumb from "../images/thumbs-up.png"


function Home(props) {



  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3007/product').then((res) => {

      if (res.data.status == true) {
        setProducts(res.data.products);
      } else {
        alert(res.data.message);
      }
    });

  }, []);


  const addlike =(id)=>{
    axios.put("http://localhost:3007/product/like/"+id).then((res)=>{
      axios.get('http://localhost:3007/product').then((res) => {

      if (res.data.status == true) {
        setProducts(res.data.products);
      } else {
        alert(res.data.message);
      }
    });
    });
  }

  console.log(products);

  if (props.products?.length > 0) {

    <div className='row'>
      {
        props.products.map((product) => {
          return (
            <Product AddToWishlist={props.AddToWishlist} addToCart={props.addToCart} product={product} key={product.id} />

          )
        })

      }
    </div>

    return (
      <><div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div></>
    )
  } else {
    return (
      <>
      <div className='container'>
        <div className='row'>
          {
            products.map((product) => {
              return (

                <div className='col-md-3 ' key={product._id}>
                  <div class="cardpro" >
                    <Link to={`/product-detail/${product._id}`} >
                      <div className="imgBox">
                        <img src={product.image} alt="mouse corsair" className="mouse" />
                      </div></Link>


                    <div className="contentBox">
                      <h3>{product.name}</h3>
                      
                      <h2 className="price">{product.price}</h2>
                     
                      <div className='d-flex'>
                      <button onClick={() => { props.addToCart(product) }} className=" btn btn-primary buy">Add Cart</button>
                      <button className='cardLikeBtn buy' onClick={(id)=>{addlike(product._id)}}><img src={thumb}  className='likeimg' /></button> 

                      </div>

                     
                   </div>

                  </div>
                  {/* <div className="card" style={{ width: "18rem", marginBottom: "20px" }} >
                    <img src={`${product.image}`} className="card-img-top product-img" />
                    <div className="card-body mb-2"> 
                      <h5 className="card-title">{product.name}</h5>
                      <Link to={`/product-detail/${product._id}`} className="btn btn-primary mb-2 btnedit">View</Link>
                      <button onClick={() => { props.addToCart(product) }} className=" btn btn-primary btnedit">Add Cart</button>
                    </div>
                  </div> */}
                </div>
              )
            })
          }
        </div></div>
      </>
    )
  }
}

export default Home





