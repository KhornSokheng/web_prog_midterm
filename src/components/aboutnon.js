import React from 'react'
import '../css/global.scss'
import '../css/aboutstyle.scss'

export default function aboutus() {
    return (
        <div className ="about" id ="about">
                <div className = "left">
                    <div className ="imgcon">
                        <img src ="dist/img/goup/mu.png"/>
                    </div>
                </div>
                <div className = "right">
                    <div className ="wrapper">
                    <h1>Hi There , I'm </h1>
                    <h2>Mujalin Khattiyanon</h2>
                    <h3>Information Technology</h3>
                    </div>
                    <a href ="#port">
                        <img src = "dist/img/goup/down.png"/>
                        </a>
           </div>
        </div>
    )
}
