

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Update() {
    const id = useParams().id;
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [details, setDetails] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
   

    const notify1 = () => toast.success(" update Successfully");
    const notify2 = () => toast.danger("Something Went wrong");
    const handleSubmit = () => {
        const ProductData = {
            name: name, image: image,details:details, brand:brand, price:price
        }
        axios.put("http://localhost:3007/update/" + id, ProductData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).then((res) => {
            console.log(res.data)
            if (res.data.status == true) {
                notify1();
            } else {
                if (res.data.status == false) {
                    notify2();
                }
            }
        })
    }


    useEffect(() => {
        axios.get("http://localhost:3001/product/" + id).then((res) => {
            console.log(res.data.movies);

            if (res.data.status == true) {
                setImage(res.data.product?.image);
                setName(res.data.product?.name);
                setDetails(res.data.product?.details);
                setBrand(res.data.product?.brand);
                setPrice(res.data.product?.price);
               


            }
        })


    },
    
    []);


    return (
        <>
  
          <ToastContainer
        position="top-center"
        autoClose={500}
        transition={Flip}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
            <div className='container d-flex justify-content-center'>
                <div style={{ width: "50%" }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ width: "600px" }} className='mx-auto'>
                            <div className="mb-3">
                                <label htmlFor="formFile" class="form-label">Image</label>
                                <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" accept='image/*' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="details" className="form-label">Details</label>
                                <input value={details} onChange={(e) => { setDetails(e.target.value) }} type="text" className="form-control" id="about" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="brand" className="form-label">Brand</label>
                                <input value={brand} type='text' onChange={(e) => { setBrand(e.target.value) }} className="form-control" id="genre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" className="form-control" id="feature" />
                            </div>
                            <button onClick={handleSubmit} className='btn btn-green border-white' >Update Product</button>
                        </div>
                    </form>
                </div>
                <Link to={`/edit/${id}`} className="btn btn-info  btnedit mx-2">Edit</Link>
        <button className="btn btnedit btn-danger" onClick={handleDelete}>Delete</button> 
            </div>
        </>
    )
}

export default Update


        

 