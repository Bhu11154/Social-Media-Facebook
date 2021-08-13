import React from 'react'
import "./RightBar.css"

export default function Users({useronline}) {
    return (
        <li className="clist">
            <img className="pic" src={useronline.src}/>
            <span className="onlineName">{useronline.name} </span>
            <div className="green"></div>
        </li>
    )
}
