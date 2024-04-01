import React from "react" ;
import  { useState, useEffect } from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Header1 from "./Components/Header1.js";
import Products from "./Components/Products";
import Favorites from "./Components/Favorites";
import Cart from "./Components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './all.css'

// import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"';
import '../src/style.css';


const App = () => {
    const [cartCtr, setCartCtr] = useState(0)
    const [cartItems, setCartItems] = useState(() => {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    });
    const [favoriteItems, setfavoriteItems] = useState(() => {
      const storedFavs = localStorage.getItem("favorites");
      return storedFavs ? [].concat(JSON.parse(storedFavs)) : [];
    });
  
  
  
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
  
    useEffect(()=>{
      localStorage.setItem("favorites", JSON.stringify(favoriteItems))
    }, [favoriteItems])
    return (

    <Router>
        <Header  cartCtr={cartCtr} setCartCtr={setCartCtr} cartItems={cartItems}/>
        <Routes>
            <Route path="/"    element={<Home/>} />
            {/* <Route path="/"    element={  <React.Fragment> <Header/>  <Home/> </React.Fragment> } />  */}
            <Route path="/home"    element={<Home/>} /> 
            <Route path="/register"  element={<Register/>} />

       

            {/* <Route path="/footer"  element={<Footer/>} /> */}
            <Route path="*"    element={  <h2>Page Not Found</h2> } /> 
            <Route path="/login"  element={<Login/>}/>
            <Route path="/Products" element={<Products cartItems={cartItems} favoriteItems={favoriteItems} setCartItems={setCartItems} setfavoriteItems={setfavoriteItems} cartCtr={cartCtr} setCartCtr={setCartCtr} />}/>
          <Route path="/Favorites" element={<Favorites cartItems={cartItems} favoriteItems={favoriteItems} setCartItems={setCartItems} setfavoriteItems={setfavoriteItems} cartCtr={cartCtr} setCartCtr={setCartCtr} />}/>
          <Route path="/Cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} cartCtr={cartCtr} setCartCtr={setCartCtr}/>}/>
       
          

             

        </Routes>
        <Footer/>
    </Router>

    )
};
export default App;