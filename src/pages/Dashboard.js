import React, { useContext, useEffect, useState  } from 'react'
import { getToken } from "../helpers";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import axios from "axios";



function Dashboard() {
  const navigator = useNavigate();
  const [product, setProduct] = useState([]);

  const UserContext = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:3007/product")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });

    
  }, []);
  console.log(product)
  function deleteItem(id) {
    axios
      .delete(`http://localhost:3007/product-delete/${id}`)
      .then((res) => {
        axios
          .get("http://localhost:3007/product")
          .then((res) => {
            setProduct(res.data.product);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (UserContext.user?.role !== "admin") {
    navigator("/");
  }
  else{
    if(product.length > 0){
      return (
        <div>
          <button onClick={() => navigator(-1)}>Back</button>
          
          
          <div className="container">
            <div className="createMovie">
              <Link style={{ marginLeft: "45%", marginTop: "10px" }} to="/product " className='btn btn-dark border-white '>Create-Product</Link>
            </div>
            <table class="table maindiv">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"> Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
            {
              product?.map((product, index)=>{
                return (
                  <>
                    <tbody>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td style={{ width: "350px" }}>
                          {product.name}
                          <br></br>Likes: {product.likes}
                          
                          
                        </td>
                        <td>
                          <img
                            src={product.image}
                            style={{ width: "180px", height: "100px" }}
                          />
                        </td>
                        <td>{product.brand}</td>
                        <td>
                          <button
                            onClick={() => {
                              deleteItem(product.id);
                            }}
                            className="btn btn-danger border-white"
                          >
                            Delete
                          </button>
                          <br />
                          <button
                            // onClick={() => {
                            //   updateItem(product.id);
                            // }}
                            className="btn  mt-3 btn-dark border-white"><Link className='text-white' to={`/update-product/${product._id}`} style={{ textDecoration: "none" }}>
                              Update </Link>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
  
              })
            }
            </table>
          </div>
        </div>
      )

    }
  
    

  }

 
  // }

}

export default Dashboard