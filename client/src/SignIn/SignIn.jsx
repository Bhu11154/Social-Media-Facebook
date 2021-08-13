import {useRef, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {  FaFacebookSquare } from "react-icons/fa"
import './SignIn.css'
import { loginCall } from '../apiCalls'
import { AuthContext } from '../context/authContext'

export default function SignIn() {

    const email = useRef();
    const password = useRef();
    let history = useHistory();

    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleClick = async (e) =>{
        e.preventDefault();
        await loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

    if(user){
            localStorage.setItem('CurrentUser', JSON.stringify(user));
            history.push('/mainpage')
        }


    return (
        <div className="container2">
            <div className="intro">
                <p className="logo">
                    <FaFacebookSquare size={60} color="blue"/>
                    <span className="nameC">Whatschat</span>
                </p>
                <img src="https://econsultancy.imgix.net/content/uploads/2018/09/04155306/social-media-image-.jpg" className="Img"/>
            </div>
            <form className="form" onSubmit={handleClick}>
                    <div className="fields"><p>Email</p><input type="text" required ref={email}/></div>
                    <div className="fields"><p>Password</p><input type="password" required ref={password} minLength='6'/></div>
                    {error && <div className='incorrect'>Incorrect Password/Email</div>}
                    
                        <Link to= {user ? '/mainpage' : "/signin"} style={{ textDecoration: 'none', color: "white"}}>
                            <button className="btn3"  onClick={handleClick}>
                                {isFetching? "Loading...":"Login"}
                            </button>
                        </Link>
                    
                    <p className="forgot">Forgot your password ?</p>
                    <hr className="line" />
                    <button className="btn2" >
                        <div onClick={()=>history.push('/')} style={{ textDecoration: 'none', color: "white"}}>Create a new account</div>
                    </button>
            </form>
        </div>
    )
}
