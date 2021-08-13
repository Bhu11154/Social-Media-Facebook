import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { FaFacebook,FaUserFriends, FaPuzzlePiece} from "react-icons/fa"
import {CgProfile } from "react-icons/cg"
import {BsFillHouseFill} from "react-icons/bs"
import {MdOndemandVideo} from "react-icons/md"
import {AiOutlineShop} from "react-icons/ai"
import './TopBar.css'
import { AuthContext } from '../context/authContext'
import { userCall } from '../apiCalls'

export default function HeadBar() {
    const size = 35;
    const history = useHistory();
    let {user,dispatch} = useContext(AuthContext)


    const Logout = ()=>{
        localStorage.removeItem('CurrentUser')
        userCall(dispatch);
        history.push('/')
    }
    return (
        <>
            <div className="bar">
                <div className="left">
                    <FaFacebook  size={40} className="icon"/>
                    <input type="text" placeholder="Search Whatschat" className="se">
                    </input>
                </div>
                <div className="middle">
                    <BsFillHouseFill size={size} className="ic"/>
                    <FaUserFriends  size={size} className="ic"/>
                    <MdOndemandVideo  size={size} className="ic"/>
                    <AiOutlineShop  size={size} className="ic"/>
                    <FaPuzzlePiece  size={size} className="ic"/>
                </div>
                <div className="right">
                    <CgProfile size={size} className="ic"/>
                    <span className="name">{user? user.username: "No User"}</span>
                    <div className="logout" onClick={Logout}>Logout</div>
                </div>
                    
            </div>
        </>
    )
}
