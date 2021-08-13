import {useState, useEffect, useContext} from 'react'
import {FaRegSmile,FaVideo } from "react-icons/fa"
import {CgProfile } from "react-icons/cg"
import {HiShare, HiPhotograph} from "react-icons/hi"
import "./Middle.css"
import Post from '../Post/PostBox'
import axios from 'axios'
import { AuthContext } from '../context/authContext'


var MyPosts = [];

export default function MiddleBar() {

    const {user} = useContext(AuthContext)
    const [enteredVal, setEnteredVal] = useState('');
    const [chats, setChats] = useState([]);
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get('/api/post');
            setPosts(
                res.data.sort((p1,p2)=>{
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                })
            );
        }

        fetchData();

    },[])

    const postData = async (userData)=>{
        const res =await axios.post('/api/post', userData );
        window.location.reload()
    }

    const postChats = (e)=>{
        e.preventDefault();
        if(enteredVal){
            const text = {"desc":enteredVal, "username": user.username};
            MyPosts.push(text);
            setChats((chats)=>{ 
                return [... chats, text];
            });
            postData(text)
        }
        setEnteredVal('');
    }

    return (    
        <div className="cont">
            <div className="header">
                <div className="mainHead">
            <div className="head">
                <CgProfile  size={35} className="prof"/>
                <form id="val">
                    <input type="text"  
                            className="sea" 
                            id="search" 
                            placeholder={"What's on your Mind " + user.username + " ?"}
                            onChange={(e) => {setEnteredVal(e.target.value)}}/>
                </form>
                <button action="submit" className="btn4" onClick={postChats}>
                    <HiShare size={30}/>
                </button>
            </div>
            <hr className="hrLine"/>
            <div className="features">
                <ul className="list">
                    <li className="lis"> <FaVideo  size={25} color="#F02849" className="icons"/><span className="itemH">Live Video</span></li>
                    <li className="lis"> <HiPhotograph  size={25} color="#45BD62" className="icons"/><span className="itemH">Photos/Videos</span></li>
                    <li className="lis"><FaRegSmile  size={25} color="#F7B928" className="icons"/><span className="itemH">Feeling</span></li>
                </ul>
            </div>
            </div>

            {posts.map((p) =>{
                return(<Post key={p.id} post={p}/>);
            })}
                        
                    

            </div>
        </div>
    );
}
