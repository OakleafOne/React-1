import React from "react";
import "./ProjectPopup.css";

const ProjectPopup =({ title, tags, info, onClick }) => {
    return (
        <div className ="project-popup">
            <h2>{title}</h2>

            <div className ="popup-tags">
                {tags && tags.map((tag, index) => (
                    <span key ={index} className ="tag">{tag}</span>
                ))}
            </div>
            <p className ="popup-info">{info}</p>

            <button onClick ={onClick} className ="close-popup">Close Popup</button>
        </div>
    )
}

export default ProjectPopup;