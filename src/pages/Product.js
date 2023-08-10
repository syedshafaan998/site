import React, {useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import '../styels/AdminPanal.css';



function Product() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [ error ,setError] =useState("");
  const UserContext = useContext(AuthContext);
  const navigator = useNavigate();



  useEffect(() => {
   

    if (UserContext.user?.role !== "admin") {
      navigator("/");
    }
  }, []);


  const handleSubmit = () => {
     console.log(image )

    // return;
        if (name && image && details && brand && price ) {

      const productData = {
        name:name,image:image, details:details, brand:brand, price:price
      }

      axios.post("http://localhost:3007/product-create", productData, {
      headers:{
        'Content-Type' : 'multipart/form-data'
      }
      
    },
    
      ).then( (res) => {
        console.log(res.data)
        if(res.data.status == true) {
          alert("Successfully created");
        }else {
          alert("something went wrong")
        }
      })
    }

  }

  return (
    <>
      <form className='createProduct' onSubmit={(e) => e.preventDefault()}>
        <div style={{ width: "600px" }} className='mx-auto '>
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name :</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Brand :</label>
            <input onChange={(e) => { setBrand(e.target.value) }} type="brand" className="form-control" id="brand" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Detail :</label>
            <input onChange={(e) => { setDetails(e.target.value) }} type="text" className="form-control" id="detail" />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Price :</label>
            <input onChange={(e) => { setPrice(e.target.value) }} type="text" className="form-control" id="price" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Image :</label>
            <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
            <textarea onChange={(e) => { setAbout(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div> */}
          <button onClick={handleSubmit} className='btn btn-primary'>Product</button>
        </div>
      </form>
    </>
  )
}

export default Product