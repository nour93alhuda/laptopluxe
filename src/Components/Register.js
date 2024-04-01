import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import validator from 'validator';


function Register() {
    const fname = useRef();
    // const lname = useRef();
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();
    //  [email, setEmail] = useState('');
    // const [isValidEmail, setIsValidEmail] = useState(true);
    const style2={
        backgroundImage:' url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)',
    };
    // const handleChange = (event) => {
    //     const inputEmail = event.target.value;
    //     setEmail(inputEmail);
    //     setIsValidEmail(validator.isEmail(inputEmail));
    //   };
    function register(event) {
        event.preventDefault();
        if(fname.current.value === '' || email.current.value === '' || password.current.value === '') {
            alert('Please fill in all fields to create an account.');
            
        }
        // else {
        //     localStorage.setItem("fname", fname.current.value)
         
        //     localStorage.setItem("email", email.current.value)
        //     localStorage.setItem("password", password.current.value)

        //     navigate("/login")
        // }
        // else  
      
        // if(fname.current.value !==''  && email.current.value !== '' && password.current.value !=='')
        
        else if (!  (validator.isEmail(email.current.value))){
            alert('Please fill a valid email.');
        }
        else
    {
            
            localStorage.setItem('fname',fname.current.value.trim());
            // localStorage.setItem('last',last.value.trim());
            if(validator.isEmail(email.current.value))
            localStorage.setItem('email',email.current.value.trim());
            localStorage.setItem('password',password.current.value.trim());
               // Store user information in localStorage
   
    
            setTimeout(()=>{
                navigate("/login")
            },1000)
        }
    }
    

  return (

<section
 className="vh-100 bg-image"
  style={style2}
  >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card"
        //    style="border-radius: 15px;"
           >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              
              <form>

                <div className="form-outline mb-4">
                  <input type="text" id="fname" className="form-control form-control-lg" ref={fname} />
                  <label className="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="email"  className="form-control form-control-lg"  ref={email}  />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
          
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" className="form-control form-control-lg" ref={password} />
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>
                <div className="d-flex justify-content-center">
                <button type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" id="submit" onClick={(e) => register(e)}>Register</button>
                </div>
                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Register;