import React from "react";
import "./Portfolio.css";

const ProjectCard =({ title, tags, onClick }) => {
    return (
        <div className ="project-card" onClick ={onClick}>
            <h2>{title || "Project Title"}</h2>

            <div className ="project-tags">
                {tags && tags.map((tag, index) => (
                    <span key ={index} className ="tag">{tag}</span>
                ))}
            </div>
            <p className ="project-info">Click for more info.</p>
        </div>
    )
}


export default ProjectCard;