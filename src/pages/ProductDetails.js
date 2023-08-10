import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import '../styels/ProductDetail.css'




function ProductDetails(props) {


  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;
  const cartItem = () => {
    console.log("cart clicked..")
  }

  useEffect(() => {
    axios.get("http://localhost:3007/product/" + id).then((res) => {
      console.log(res.data);
      setProduct(res.data.product);
    })
  }, []);
 




  if (product !== null) {
    return (
      <>
        <div className="container productdetails" >
          <div className="row">
            <div className="col-md-6">
              <img className="mt-4 mb-5" src={product.image} width="400px" height="400px" />
            </div>
            <div className="col-md-6">
              <h2 className="mt-4">{product.name}</h2>
              <p><b>Detail: </b>{product.details}</p>
              <p><b>Brand: </b> {product.brand}</p>
              <p><b>Likes: </b> {product.likes}</p>
              <div ><b>Price: </b>${product.price}</div>

              {/* <div><b>Rating:</b>  {product.rating['rate']}</div> */}
              <div> <button onClick={() => { props.AddToWishlist(product) }} className="btn btn-primary btnAddToCart">Add To Wishlist</button>
              <button onClick={() => { props.addToCart(product) }} className=" btn btn-primary btnAddToCart">Add To Cart</button>
           </div>
              </div>
          </div>
        </div>

      </> 
    )
  } else {
    return (
      <>
        loading...
      </>
    )
  }

}

export default ProductDetails