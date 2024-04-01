// import React from "react" ;
// import { Link , NavLink } from "react-router-dom" ;

// const Header = () => {
//     const style1 = ( { isActive }) => {
//         return {
//             color: isActive ? "#005490" : "#fff",
//             fontSize : isActive ? "32px" : "28px",
//             // textDecoration : isActive ? "none" : "underline" ,
//             fontWeight : isActive ? "bold" : "normal"
//         }
//     }
//     return  (
//     <nav 
//      className="nav1"
//     >
        
//         <NavLink style={ style1 } to="/home">Home</NavLink>
        
//         <NavLink style={ style1 } to="/login">Login</NavLink>
//         <NavLink style={ style1 } to="/register" >Register</NavLink>
        

//     </nav>
    
//     )
// };
// export default Header;
import React, { useState, useEffect, useRef } from "react";

function Header({cartCtr, setCartCtr, cartItems}) {
    const [LoggedIn, setLoggedIn] = useState(false);
    // const [g, setg] = useState(false);
    const cartCounter = useRef()
    
// const g=localStorage.getItem("fname");
// useEffect(() => {
//     const g = localStorage.getItem("fname");
//     setg(g);
// }, []);

    useEffect(() => {
        const loggedIn = localStorage.getItem("loginStatus");
        setLoggedIn(loggedIn);
    }, []);

    useEffect (() => {
        const numOfItems = cartItems.reduce((num, item)=> num + item.qty, 0)
        setCartCtr(numOfItems)
    }, [cartItems])
    return (
        <nav className="header navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                {/* <img src={require("../images/logo.png")} className="logo"></img> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/Products">Products</a>
                        </li>
                    </ul><div className="userName" style={{marginleft: '50%', transform: 'translate(-150%)',display:'none'}}>
                    <p style={{marginbotton:'0px'}}>Welcome <span id="user-name"></span>  </p>
                 </div>
                    <div>                      
                        {!LoggedIn ? (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" href="/login">Login</a></li>
                                <li className="nav-item"><a className="nav-link active" href="/register">Register</a></li>
                            </ul>
                        ) : LoggedIn === "user"? (
                            
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                    <p  style={{color:'#1469af',fontSize:'23px',paddingRight:'300px'}}>Welcome_   {localStorage.getItem("fname")} </p>
                </li>
                                <li className="nav-item"><a className="nav-link active" href="/Favorites">Favourites</a></li>
                                <div className="cart-container">
                                    <li className="nav-item"><a className="nav-link active mx-3" href="/Cart"><i class="fas fa-shopping-cart"></i></a></li>
                                    <span ref={cartCounter} className="cart-ctr text-light" style={{ display: cartCtr === 0 ? 'none' : 'block', backgroundColor:'blue',textAlign:'right',marginTop:'0',width:'10px',borderRadius:'50%',}}>{cartCtr}</span>
                                </div>
                                <li className="nav-item"><a className="nav-link active" href="/home" onClick={()=>{localStorage.removeItem("loginStatus"); localStorage.removeItem("cart"); localStorage.removeItem("favorites"); setLoggedIn(false)}}>Logout</a></li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" href="#">Add Products</a></li>
                                <li className="nav-item"><a className="nav-link active" href="/home" onClick={()=>{localStorage.removeItem("loginStatus"); localStorage.removeItem("cart"); localStorage.removeItem("favorites"); setLoggedIn(false)}}>Logout</a></li>
                            </ul>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
