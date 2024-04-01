import React from "react" ;
import  { useRef } from "react";

import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()

    const email = useRef();
    const password = useRef();
    const stylel={
        backgroundImage:' url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg)',
    };
    function login(e){
        e.preventDefault();
        if(email.current.value === "" || password.current.value === "") {
            alert("Please fill in your information to login.")
        }
       
            else if(email.current.value === localStorage.getItem("email") && password.current.value === localStorage.getItem("password")) {
                localStorage.setItem("loginStatus", "user")
                navigate("/Products")
                window.location.reload();
            }
            else {
                alert("Invalid email or password, please try again.")
            }
       
    }
    return (
        <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
       
         {/* <div className="img-fluid"   style={stylel}></div> */}
         <img
      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
      className="img-fluid"
      alt="Phone image"
    />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>

             
              <div class="form-outline mb-4">
               
                <input type="email" id="email" class="form-control form-control-lg" ref={email}  />
                <label class="form-label" for="form1Example13">Email address</label>
              </div>
    
              <div class="form-outline mb-4">
                <input type="password" id="password" class="form-control form-control-lg" ref={password}/>
                <label class="form-label" for="form1Example23">Password</label>
              </div>
    
              <div class="d-flex justify-content-around align-items-center mb-4">
                
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                  <label class="form-check-label" for="form1Example3"> Remember me </label>
                </div>
                <small class="text-secondary">Do you have an account? <a href="/register">Register</a></small>
              </div>
    
             
              <button type="submit" class="btn btn-primary btn-lg btn-block" id="submit" onClick={(e) => login(e)}>Sign in</button>
    
    
            </form>
          </div>
        </div>
      </div>
    </section>
    )
};

export default Login;