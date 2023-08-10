
import './App.css';
import { createContext, useContext, useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route, createRoutesFromChildren } from 'react-router-dom';
import Home from "./pages/Home";
// import Home1 from './pages/Home1';
import Search from "./pages/Search";
import Login from './pages/Login';
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import Update from './pages/Update';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Dashboard from "./pages/Dashboard";
import Shop from './pages/Shop';
// import Register from "./pages/Register"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';
import OnlyAuth from './components/OnlyAuth';
import { AuthContext } from './context/AuthContext';
import SlideBar from './pages/SlideBar';

// import { ToastContainer, toast, Flip } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export const authContext = createContext("");

function App() {
  const [isLogin, setIsLogin] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3007/product").then((data) => {
      return data.json();
    }).then((res) => {
      setProducts(res);
      setFilteredProducts(res);
    }).catch((err) => { console.log(err) })
  }, []);

  const addToCart = (product) => {
    const newAr = [...cart, product];
    setCart(newAr);
  }

  const AddToWishlist = (product) => {
    const newArr = [...wish, product];
    setWish(newArr);
  
  }

  // Remove 1 products from cart function

  const removeFromCart = (index) => {
    const newAr = cart.toSpliced(index, 1);
    setCart(newAr);


  }
    // clear all products from cart function
    const removeCartAll = () => {
      setCart([])
    }
  console.log("cart ", cart)
  return (
    <authContext.Provider value={{ isLogin, setIsLogin }}>
      <div className="App">

      {/* <ToastContainer
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
      /> */}
        {/* <Navbar  cart={cart} wish={wish}/> */}

        <Header cart={cart} wish={wish} />
      
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} />} />
          {/* <Route path='/' element={<Home1 />} /> */}
          <Route path='/Search' element={<Search />} />
          <Route path='/Login' element={<OnlyAuth><Login /></OnlyAuth>} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          {/* <Route path='/profile' element={ <OnlyAuth> <Profile /> </OnlyAuth> } /> */}
          <Route path='/product' element={<Product />} />
          <Route path='/update' element={<Update />} />

          <Route path='/Shop' element={<Shop />} />
          {/* <Route path='/Register' element={<Register />} /> */}
          <Route path='/product-detail/:id' element={<ProductDetails addToCart={addToCart} AddToWishlist={AddToWishlist} />} />
          <Route path='/Cart' element={<Cart cart={cart}  addToCart={addToCart} removeFromCart={removeFromCart} removeCartAll={removeCartAll} />} />
          <Route path='/Wishlist' element={<Wishlist wish={wish} addToCart={addToCart} />} />

          <Route path='/Contact' element={<Contact />} />
          <Route path='/slide' element={<SlideBar />} />

        </Routes>
        <Footer />
      </div>
    </authContext.Provider>
  );


}

export default App;
