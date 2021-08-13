import React from 'react'
import {FaUserFriends,FaArrowCircleDown,FaSuitcase,FaHeartbeat } from "react-icons/fa"
import {TiGroup} from "react-icons/ti"
import {FcShop, FcClock,FcBookmark} from "react-icons/fc"
import {MdOndemandVideo, MdEventNote,MdLibraryBooks} from "react-icons/md"
import "./LeftBar.css"

export default function LeftBar() {

    const size = 30;
    return (
        <div className="container">
            <div className="ite">
                <FaHeartbeat size={size} color="#A536C4" className="ico"/>
                <span className="nam">COVID-21 Info. Centre</span>
            </div>
            <div className="ite">
                <FaUserFriends size={size} color="#1D8BF6" className="ico"/>
                <span className="nam">Friends</span>
            </div>
            <div className="ite">
                <TiGroup size={size} color="#54D5C4" className="ico"/>
                <span className="nam">Groups</span>
            </div>
            <div className="ite">
                <FcShop size={size} className="ico"/>
                <span className="nam">Marketplace</span>
            </div>
            <div className="ite">
                <MdOndemandVideo size={size} color="#299CDC" className="ico"/>
                <span className="nam">Watch</span>
            </div>
            <div className="ite">
                <MdEventNote size={size} color="#E92E4D" className="ico"/>
                <span className="nam">Events</span>
            </div>
            <div className="ite">
                <FcClock size={size} className="ico"/>
                <span className="nam">Memories</span>
            </div>
            <div className="ite">
                <FcBookmark size={size} className="ico"/>
                <span className="nam">Saved</span>
            </div>
            <div className="ite">
                <MdLibraryBooks size={size} color="#A236C6" className="ico"/>
                <span className="nam">Pages</span>
            </div>
            <div className="ite">
                <FaSuitcase size={size} color="#DA7A1E" className="ico"/>
                <span className="nam">Jobs</span>
            </div>
            <div className="ite">
                <FaArrowCircleDown color="rgb(117, 113, 113)" size={size} className="ico"/>
                <span className="nam">See more</span>
            </div>
        </div>
    )
}
