import React from "react"

export default function Info(){
    return(
        <div className="main--info">
            <img className="info--img"src="./src/headshot.jpg" />
            <h1>Ludjy Derisier</h1>
            <h3>Full Stack Developer</h3>
            <p><a href="https://ludjydev.netlify.app/">ludjy.dev</a></p>
            <button className="emailBtn">
             <img src="./src/Mail.png"/>
            <a href="mailto:ludjy.dev@gmail.com">Email</a>
            </button>
            <button className="linkBtn">
            <img src="./src/linkedin.png"/>
            <a href="https://www.linkedin.com/in/ludjy-dev/">LinkedIn</a>
            </button>
        </div>
    )
}