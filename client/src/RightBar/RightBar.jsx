import React from 'react'
import {BiVideoPlus,BiSearch,BiDotsHorizontalRounded} from "react-icons/bi"
import "./RightBar.css"
import {OnlineUsers} from "../dummyUsers"
import Users from "./onlineusers"

export default function RightBar() {
    return (
        <div className="con">
            <div className="sponsor">
                <p className="word">Sponsored</p>
                <div className="ele">
                    <img className="ad" src="https://www.animefillerlist.com/sites/default/files/styles/anime_poster/public/screenshot_2021-04-19_naruto-shippuden-1131_webp_webp_image_350_x_525_pixels_0.png?itok=dpibYojN"/>
                    <div className="info">
                        <p className="nameinfo">
                            This is a Naruto Ad
                        </p>
                        <div className="site">
                            Naruto.com
                        </div>
                    </div>
                </div>
                <div className="ele">
                    <img className="ad" src="https://external-preview.redd.it/AaqdMWj6OpIxGTFjdOUplWVrNjMlH5crOEAMpDDrX1A.png?auto=webp&s=0aee864f4bc1448a044b9e9b9f79ebc7ee19a1fc"/>
                    <div className="info">
                        <p className="nameinfo">
                            This is a Boruto Ad
                        </p>
                        <div className="site">
                            Boruto.com
                        </div>
                    </div>
                </div>
            </div>
            <hr className = "Li"/>
            <div className="contacts">
                <p className="word">Online Friends</p>
                <div className="iconsSmall">
                    <ul className="myList">
                        <li className="el"><BiVideoPlus className="sic" /></li>
                        <li className="el"><BiSearch className="sic" /></li>
                        <li className="el"><BiDotsHorizontalRounded className="sic" /></li>
                    </ul>
                </div>
            </div>
            <div className="contList">
                <ul>
                    {OnlineUsers.map((user)=>{
                        return <Users key={user.id} useronline = {user} />
                    })}
                </ul>
            </div>
        </div>
    )
}
