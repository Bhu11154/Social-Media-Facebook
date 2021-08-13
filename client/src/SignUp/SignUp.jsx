import React, {useRef,useContext} from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'
import { registerCall } from '../apiCalls'
import { AuthContext } from '../context/authContext'


export default function SignUp() {

    const email = useRef();
    const password = useRef();
    const confirmpassword = useRef();
    const mobile = useRef();
    const username = useRef();

    const {dispatch} = useContext(AuthContext)

    const handleClick = (e) =>{
        e.preventDefault();
        if(password.current.value===confirmpassword.current.value){
            registerCall({username: username.current.value, password: password.current.value, mobile: mobile.current.value, email: email.current.value, confirmpassword: confirmpassword.current.value}, dispatch)
            const pop = document.querySelector('.pop');
            pop.classList.add('effect');
            
        }
    }

    return (
        <>
        <div className="main">
                <div className="signup">
                    <h1>Sign Up for Whatschat</h1><br/>
                    <img src="https://accounts.snapchat.com/accounts/static/images/ghost/snapchat-app-icon.svg" width="60px"></img>
                    <div className='textabove'>Already a User? Click here to <Link to='/signin'>Login</Link></div>
                </div>
                <form className="form" onSubmit={handleClick}>
                    <div className="fields"><p>Name</p><input type="text" minLength='3' required ref={username}/></div>
                    <div className="fields"><p>Email-ID</p><input type="text" minLength='6' required ref={email}/></div>
                    <div className="fields"><p>Mobile</p><input type="text" minLength='10' required ref={mobile}/></div>
                    <div className="fields"><p>Password</p><input type="password" 
                    required ref={password} minLength='6'/></div>
                    <div className="fields"><p>Confirm Password</p><input type="password" 
                    required ref={confirmpassword} minLength='6'/></div>
                    <button className="btn5">Sign Up Now</button>
                </form>
                <div className="pop">
                    Account Created Successfully !!
                    <br />
                    Click here to login<br/>
                    <button className="btn5">
                        <Link to="/signin" style={{ textDecoration: 'none', color: "white"}}>Login</Link>
                    </button>
                </div> 
        </div>
        </>
    )
}
