import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowlogin}) => {

const [currState,setCurrState] = useState("Login")



  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowlogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your mail' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing i agree to the terms of use & privacy policy.</p>

            </div>
            {currState==="Login"
            ? <p>Create a new account? <span onClick={()=>setCurrState("sign up")}>Click here</span></p>
            : <p>Already have an acccount? <span onClick={()=>setCurrState("Login")}>Login here</span></p>


            }
           
        </form>
      
    </div>
  )
}

export default LoginPopup
