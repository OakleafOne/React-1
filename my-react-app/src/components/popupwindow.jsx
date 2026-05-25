import React from "react";
import ProfilePic from "../assets/user-scr.png";

function PopupWindow({title, info, screenshot, repo, tech, onClick}) {
    return (
        <div className ="popup-window">
            <h1 className ="title">{title}</h1>
            <p className ="info">{info} </p>
            {screenshot && <img src ={ProfilePic} alt ={title} />}
            {tech && <p className ="tech">Tech used: {tech}</p>}
            {repo && <a href ={repo} target ="_blank" rel ="noreferrer">Show repository on Github.</a>}
            <br />
            <button className ="close-button" onClick ={onClick}>Close window</button>
        </div>
    )
}

export default PopupWindow;