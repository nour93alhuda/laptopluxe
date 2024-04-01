import React from "react" ;
import { Link , NavLink } from "react-router-dom" ;

const Header1 = () => {
 
    
    return  (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#ddd'}}>
        <div className="left-header">
            <a href="/home" className="logo" style={{fontsize: '1.3rem'}}>LaptopLuxe </a>        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-secondary" style={{fontsize: '1.5rem'}}></i> 
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <div className="userName" style={{marginleft: '50%', transform: 'translate(-150%)'}}>
                    <p style={{marginbottom: '0'}}>Welcome <span id="user-name"></span></p>
                 </div>
                 
          <div class="right-header ml-auto">
            <div class="login">
                <ul>
                    <li> <a href="/login">Login</a> </li>
                    <li> <a href="/register">Register</a> </li>
                  
                </ul>
            </div>
         
                <div className="user d-flex">
                    <div className="cart-box">
                        <div className="cart-btn" onclick="cartBtn()">
                            <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;<span> Cart </span><span id="number"></span> <i class="fas fa-caret-down arrow" id="arrow"></i>
                        </div>
                            <div className="cart">
                                <ul id="favouriteItems">
                                </ul>
                                <a href="/product" id="view" onclick="viewProduct()">View all product</a>
                            </div>
                    </div> 
                </div>
                <div className="logout-box">
                    <a href="#" class="logout">logout</a>
                </div>
        </div> 
        </div>
      </nav>


    
    )
};
export default Header1;