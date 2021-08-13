import React,{useRef, useContext} from 'react'
import {BsPersonFill} from "react-icons/bs"
import {AiOutlineEdit} from "react-icons/ai"
import {FcFullTrash} from "react-icons/fc"
import "./PostBox.css"
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import {format} from 'timeago.js'


const makeEdit = (post, text, user)=>{

    if(post.username === user.username){
        console.log(text.current)
        const editOpt = text.current;
        const popE = document.querySelector(".popEdit");
        
        editOpt.toggleAttribute("readOnly");
        if(editOpt.hasAttribute("readOnly")){
            popE.classList.add("eff");
            const editedPost = {...post, desc: text.current.value} ;
            console.log(editedPost)
            axios.put(`/api/post/${post._id}`, editedPost).then(() => {
                window.location.reload();
            })
        }
    }
}

const deleteElement = (post, user) => {
    if(post.username === user.username){
        const popD = document.querySelector(".popDelete");
        popD.classList.add("eff");
        axios.delete(`/api/post/${post._id}`).then(() => {
            window.location.reload();
        })
    }
}
 

export default function Post({post}) {

    let {user} = useContext(AuthContext)

    const myText = useRef();

    user =JSON.parse(localStorage.getItem('CurrentUser'))

    const Inc = (post)=>{

        try{
            axios.put(`/api/post/like/${post._id}`, {username: user.username})
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    const Dec = (post)=>{
        try{
            axios.put(`/api/post/dislike/${post._id}`, {username: user.username})
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }   
    
    return (
        <>
            <div className="popEdit">
                Post Edited
            </div>
            <div className="popDelete">
                Post Deleted
            </div>
            <div className="chatArea">
                <div className="profile">
                    <div className="start">
                        <BsPersonFill width="40px" className="pro Bu"/>
                        <span className="userName">{post.username}</span>
                        <span className="time">{format(post.createdAt)}</span>
                    </div>
                    <div className="end">
                        <AiOutlineEdit width="40px" onClick={() =>makeEdit(post, myText, user)} className="Bu" />
                        <FcFullTrash width="40px" onClick={()=>deleteElement(post, user)} className="Bu" />
                    </div> 
                </div>
                <textarea id={post._id} className="mes" cols="38" rows="5" readOnly ref={myText}>{post.desc}</textarea>
                <hr className="hrLine"/>
                <div className="postCh">
                    <div className="ld">
                    <img  onClick={() =>Inc(post)} className="buttonLike" width="40px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhMQEA0SEBAQEBAQExAQDxAVDxYQFxMWFhUSExMYHSggGBsnHRUTJTEhJSorLy4uGB8zRDMtNyktLisBCgoKDg0OGxAQFy0lICUuLTAwLy0vLS0tLy8uLy8tLTAtMC8tLS4tLTUtLS4tLy0tLS0vMi0tMC0tLy0vLi8vLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGCAP/xABHEAACAgACBQYICwcCBwAAAAAAAQIDBBEFBxIhMQYTQVFhcSIycoGCkaGxFBcjQlJUkpPB0dIWNWJzorLwQ7MkJVODlKPC/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAQFBgEDAgf/xAA3EQACAQICBgcHAwUBAAAAAAAAAQIDEQQFITFRcaHREkFhgZGxwRMUIjIzUvAGFXIjNEJT4WL/2gAMAwEAAhEDEQA/AJxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB87bIxTlKSjGKzcpNKKXW2+BxenNYmHqzhh4/CJrdt5uNKfY+MvNu7T3oYarXl0aUb+S3vqPic4wV5M7g1uP03haN12Kqrl9FzW39hb/AGEP6W5WY7E57V8oQf8Ap051w7nlva72zSpF3RyC+mrU7lzfJkWWM+1eJLuJ1iYCPiu23yKmv9xxNfbrPp+bhLX5U4R92ZGZQsI5LhF1N73yseLxVQkha0I9OCf36/QZNWszDfPw18fJ5uXvkiLgfTyfB/ZxfMe9T2kyYTl3o+zJO6VTfRbXNLzyScV6zfYPHVXLapurtj11zjJefJnn4rVZKLUoScJLhKLcZLua3oiVcgov6c2t+leh9xxkv8keigQ7onl7jaMlOSxMF0W+Pl2WLf53tHe6B5Z4TFZQ2+ate7mrclm+qEuEu7j2FPisrxFDS1dbVp8VrXkSYYiE9Gp9p0oAK49wAAAAAAAAAAAAAAAAAAAAAaDlHynowUfDe3a1nGmLW0+2X0Y9r82ZreWfLGOEzppyniWt74wqT4OXXLqj530JxNfdOyUp2Tc5ze1KUnnJvrbLrLspddKrV0R6l1vku3r4kSvieh8MdfkbTT3KPE4yWd08q0840wzVUerd859r9hqQDV04RpxUYqyXUiucm3dgAH0cuAABcAAC4AAFwGgDoudZyZ5c34fKu5u+jhvfysF/BJ8V2P1olPRmkqcTWrabFOD6VxT6YyXFPsZABsNB6ZvwditqnlwU4PxJx+jJe58UUuPyinW+Ol8MuD37H2rv2kqjinDRLSifAafk7p2nGV85U8pLJTrb8OEup9a6n0+tLcGTnCUJOMlZrqLJNNXQAB8nQAAAAAAAAAAAAcpy45TrB17FbTxNieyuKhDhzkl7l0vsTNzpzSdeEonfZwgt0c98pvdGC7W/zIM0jjrMRbO62W1ZZLab6F1RXUksku4t8pwHvE/aVF8C4vZu2+BExVf2a6K1vgj4WTcm5SblKTcnJvNtt5tt9LBaDYWKouBaDoLgWgAuBaADJ0dgLcRZGqmtzslwisuHS23uS7WdW9WuM2drnaHLjsKdnq2tnLP/ADMv1TWf8VZHrw0nn0+DZX+r2ErmezPM6+Hrezp2tZdV9ZPw2HhOHSlyPO+LwtlU5VWwcLIPKUZcU/x7+k+ZJutXRMZVQxUVlOuSrm+uuT8HPulll5TIwLXA4pYmiqlrPU1sf5p7yJWp+zm4lwLQTDzLgWgAz9CaWtwlsbqXvW6UX4s4dMJdnu4k26D0rVi6Y3VPdLc4vxozXGEu1fk+kgM6PkTyheDvSk38HtajYuhdVi7V09mfYVGa5esRDpw+dcVs5eBKw1f2bs9T4E1gti096eae9NcMi4xxbAAAAAAAAAAA1PKXSawuGsv+dGOUE+myXgwXra82Z9QhKclGOtu3icbSV2RxrL05z1/weD+Sw7aeXCV3CT9Hxe/aOOEpNtttttttvi2+LYP0DD0I0KUacdS/G+/WUE6jnJyfWAAex8XAAAuAABcAGx5P6Ftxl0aa93TObXgwh0yf4LpfrPmc4wi5SdktZ1Xk7JaTpdVOFm8TZdsvm40yrc+jblKDUe15Jv1daJYMHRWjqsNVGmmOzCC9JvplJ9LZnGFx2K95rOpay1Lctvb1l5Qpezh0Wc1rF/d2I/7P+/WQsSzrTxOzhI19Nt0Fl/DFObfrUfWRMaTIotYTfJvgl6Fdjn/V7l6gAFwQ7gAAXAAAuSvqy05z1Dw85Z2YdLZz4ul+L9l7u7ZO3IG5K6VeExVVueVe1sWfy5bperc++KJ5MbnGF9jX6cdUtPf18+8uMHV6dOz1r8X52AAFSSwAAAAAARxrb0huowyfHauku7OEPfZ6iRyE9YOL53H3Lor2Ko90YrP+pzLfJaXTxXSf+Kb9PUh46fRpW26DnQUBsimKgoACoKAAqCgAPrhcPO2caq4udlklGMVxbf8AnHoRN3JbQUMFSq1lKyWUrbMvGn2fwrgl+LZz+rTk7zVfwu2Pyt0fk014tT+d3y492XWzvDI5xjnVn7CD+Fa+18l56dhb4Kh0Y9OWt8FzAAKQnERa0tJc7iY0xeccPDZf8yeUpexV+044m+/kfo+cpTnhlKc5SnKTstzcm82/GLP2J0d9Tj95b+o02FznDUaMaajLQti19fXtuVlTB1Zzcm1p38iEwTZ+xOjvqcfvLf1Gv0tq+wdkHzEHh7cvBkpzlDPoUoyb3d2TJEc+wzdmpLuXozyeAqpaGmRGC6+qUJShNZThKUJLqlFtNetMsLpO5CKgoDoKk3ciNIc/g6Zt5yhHmpdecHspvtaUX5yECStUeM8DEUdEZV2r0k4y/th6ymzyip4Xpfa0/HQ/NEzAztVttX56kigAx5cgAAAAAA8+aau5y++z6d1s/XOTPQZ5vNJ+no/Uf8fXkVmZSsorf6cwADSlUACkuD7mdSu7HG9B2OjNXuKurjbK2FO2lKMJ7bnstZpySW7uMv4scR9aq+zZ+RKNPix8le4+hi3neLbuml3IvVgKNtKfiyKXqxxPRiaW+6xe3I4/H4Cyi2VF0dmcJKMlnuyeTTT6mmn5z0MQ9rIX/MX5FBZ5VmVfEVnCo1a19Ctqa2byLjMLTpwUo7ba7kvxgkkksklkkuCRcAZZFu9YAAOAAAAA1HKTR92IolVTiOYlJNOWzntL6DfGKfWt/uf1BJySbstuzwOSbSulchflDiI24rEWQecJ3Wyi1wcdp5SXfx85ri++mVcpVzWzOuUoSXVKLaa9aLD9EgkopLUkjMyldtsAA+z5B2mqi3Zxk457p4exZdqnBr2bRxZ1OrWWWPq/ijav/W3+BDx6vhqi/wDLPfDP+tHeTOADBGiAAAAAAB5wlHJtPim0+9bj0eQByjw/N4vEQ4bN9qXk7bcfY0aP9PS01I7n4X5lXma0RlvXjbka4AGmKm4KPg+5lSkuD7mfUPmR8y1Ho2rxY+SvcfQ+dXix8le4+h+ZmsBDusb94ehT7iYiHdZH7x9Cgu8h/un/ABfmiDmP0e9epMQAKUnvWAADgAAAPjiL4VxlOclCEU5SlJ5RSXFtn2OI1o6Pc8LzysmuZnDahty5uUZSUd8M8tpOUcn3nth6Ua1WNOUrXdr2vr1eOo8603CDklexGmm8WrsRddFZRttsnHPjsuTyzXXlkYIB+gxiopJakZpyu7sAA+jlwdVqyrzx1b+jC2X9Oz/9HKncapKG8TbPohQ4+lKccvYpELMZdHC1H2PjoPfCq9aK7f8AvoSwADBmjAAAAAABDWszB83jZSy3X1wtXVnlsP2wz85MpwWtjRu3RXiEt9M3CX8uzJZv0lFekWuTVvZ4pL7tHquKRDx8OlRb2afzuuRWADameAlwfcwJcH3M7H5kceo9HVeLHyV7i8sq8WPkr3F5+aGuBDusj94+hQTEQ5rKeWkW3wUKX5i6yH+6f8X5ogZl9HvXqTGAClLB6wAAcAAABHmtHTkY1/A4xlt2OE5ycZKHNxkpJRb8ZuSXDNLJ9JIZH2tyVfM0rdzvOScfpc3sPb82fN+on5WovFwUlfTo3rSn3WI2MbVCTTIvABuzNgAAAlPVLgtmi258bbVBeTXHivPOXqItRPfJrR/wbC00tZShWnP+ZLwp/wBTZSZ7W6GGUOuT4LS+Nixy2HSquWxeejmbUAGQLwAAAAAAGHpTAxvpson4tsJQfWs1uku1PJ+YzAdTaaa1nGrqzPOeNw06bJ1WLKdc5Qku1PLd2HyJG1p6C4Y2uP0a7suvhCb9kX6JHBv8HiViaKqLr19j6+e5mYxFF0ajh4biofB9xQEtaHc8D0Vgr42VwnCSlCcIyjJcGmuJkHnrC6WxNS2asTbVHPPZrtsjHPryTyPt+0WO+v4j/wAi39Rln+n5X0VFbcy6WawtpiyfyFdZF0Z46zZalswhCWX0lHevaap8ocb9exP39v6jWtk7LsqlharqOd9FtC7VyI2Lx0a0Ogo209Z2OiNYmJprjVOqF+wlGM5SlGeyuCk1ntPt95nfGjb9Tr+8n+RH4JTyrBybbpLivJ2PBY2ulZTfD1RIHxo2/U6/vJ/kPjRt+p1/eT/Ij8HP2nBf6l4y5nffq/38FyJA+NG36nX95P8AIr8aNv1Ov7yf5EfAftOC/wBS8Zcx79X+/guR22L1l4ySyrqqq7dmUpLuzeXsORx2Otvm7brJWWPjKT35dCS4JdiMcEmjhKNH6cEvPx1njUr1KnzybKgoCQeVyoKFRYXOl1f6I+EYyDazroytn1Zp+DHzyy3dSZNhzXIfQXwTDJTWV1uVlnWnl4Nfor2tnSmHzTFrEV24v4VoXq+98LGkwVD2VJJ63pYABWksAAAAAAAAA+GKw0LYSrsipQnFxlF8HFrJog3lToGeCvdcs3B+FVY140P1Lg1+DRPJp+UehKsbS6rNzXhV2JeFCfQ11rrXSvWWWWY/3Wp8XyvXz/Na7bETGYX28NGtauRAwMvS2jLcLbKm6GzOP2ZR6JxfTF/5vMQ28ZKSutRmmmnZ6wADpwAAAAAAAAAAAAAAAAAAHdatOTfOzWMtj8lXL5KLXjWr53dF+3uZqeRvJWeNntSzjh4P5Szpk/oQ7et9C82cz4eiFcY1wioQglGMYrJKK4JFBnGYqnF0Kb+J6+xbN74LuLXL8J0n7Wepau3t3H2ABlC8AAAAAAAAAAAAAAANJyj5P042vYsWzKObrtj48JdnWn0rp78mob0/oK/B2c3dDc89iaz5ua64v8OKJ/MTSGAqvrdV1ashLjGXX1p8U+1Fnl+ZzwvwvTDZs3cuvfpIWKwUa6utEtvPn1HncHdcpdXltWdmEzur483/AK0V2fSXdv7HxOIlFptNNNNpprJprimug2GHxVLER6VOV/Nb1+dhn61GdF2miwFQe543KAqALlAVAFygKgC5QFTJwGAtvmq6apWTfzYLPd1t8Eu1nJNRV3qOq7dkjFOs5H8jbcW1banVhl8/hOzsrz6P4uHf0dPyX1eQrytxmVs+KpW+teW/nvs4d530YpLJLJLckuGXUZ3MM7SvTw+l/dy5+Fy4wuWv5q3hz5eJ8MFhK6YRqqgoVwWUYx4Jfj3mSAZhtt3ZdAAAAAAAAAAAAAAAAAAAAAA02muTmFxa+WpTnlkrY+DYvSXHueaNyD7hOUJdKDae1aDkoqStJXRFultWVsc3hro2R6IWeBPu2luk/snJY/k9jKd9uEsilxlsOUPtxzj7SfwW9DPcRDRUSlwfDRwv2lfUyyjL5bry4nm0HoXEaLw9u+3DVWPrnVXJ+to19vJDR8uODrXk7Uf7Wixj+oaLXxU2tzT5EN5RPqmvBrmQUCcf2K0d9TX3l36j708lsBDhgaX5cNv+7M+n+oMP9kuHNnP2mp964kEQi20km2+CSzb7kb3R3I3H35ZYaUIv59vgR78pb35kya8LhK6llVVCtdVcIxXqSMkh1f1BN/Tppb3fyt6kinlMF88m92jn6EeaH1ZVxylir3Y/+nVnGHc5ve13KJ22jtH00Q5uimNUOqKyzfXJ8W+1maCnxGMr4j6km+zq8Fo9SwpYenS+SNvPx1gAEY9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"/>  
                    <span className="num">{post.likes.length}</span>
                    </div>
                    <div className="ld">
                    <img  onClick={()=>Dec(post)} className="buttonLike" width="34px" height="33px" src="data:image/png;base64,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" /> 
                    <span className="num">{post.dislikes.length}</span> 
                    </div>
                </div>
            </div>
        </>
    );
}
