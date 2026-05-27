import {useState} from "react";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectPopup from "../components/ProjectPopup";

const Portfolio = () => {
    const [preview, setPreview] = useState(false);
    const [previewButton, setPreviewButton] = useState("Show Projects");
    const [search, setSearch] = useState("");
    const [popup, setPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    const projects = [
        {
            title: "Project: My first website",
            tags: ["#HTML", "#CSS"],
            info: "This is the very first website I ever made",
        },
        {
            title: "Project: SVG",
            tags: ["#HTML", "#CSS", "#SVG"],
            info: "This is a project where I learned how to create SVGs",
        },
        {
            title: "Project: Form",
            tags: ["#HTML", "#CSS"],
            info: "A project where I learned how to make a form that requires valid inputs to submit",
        },
        {
            title: "Project: Grid",
            tags: ["#HTML", "#CSS", "#GRID"],
            info: "A project where I learned how to use grid in CSS",
        },
        {
            title: "Project: Flexbox",
            tags: ["#HTML", "#CSS", "#FLEX"],
            info: "A project where I learned how to use flexbox in CSS",
        },
        {
            title: "Project: JavaScript Variables and Operators",
            tags: ["#HTML", "#JS"],
            info: "My very  first project using JavaScript to learn the basics",
        },
        {
            title: "Project: JavaScript String Method and Parse",
            tags: ["#HTML", "#JS"],
            info: "A JavaScript project where I learned to use string methods and parses",
        },
        {
            title: "Project: React Portfolio",
            tags: ["#REACT", "#HTML", "#CSS", "#JS"],
            info: "This is the project for this portfolio",
        },
        // Left empty for addition of future projects. { title: "", tags: [], info: "", },
        // Left empty for addition of future projects. { title: "", tags: [], info: "", }, 
            
        
    ];

    const showPopup = (project) => {
        setPopup(true);
        setPopupData({
            title: project.title,
            tags: project.tags,
            info: project.info,
        });
    };

    const closePopup = () => {
        setPopup(false);
    };

    const togglePreview = () => {
        setPreview(!preview);
        if (!preview) {
            setPreviewButton("Hide Projects");
        } else {
            setPreviewButton("Show Projects");
        }
    };

    return (
        <div>
            <h1 className ="portfolio-title">My Portfolio</h1>
            <p className ="portfolio-desc">Here are some of my projects:</p>

            <div className= "toggle-preview">
                <button onClick ={togglePreview} className ="toggle-preview-button">{previewButton}</button>
            </div>

            {preview && (
                <div className ="search-bar">
                    <input type ="text" placeholder ="Search projects..." value ={search} className ="search-input" onChange ={(e) => setSearch(e.target.value)} />
                </div>
            )}

            {preview && (
                <div className ="project-list">
                    {projects.filter((project) => {
                        if (search.trim() === "") {
                            return true;
                        }
                        const query = search.toLowerCase();
                        const matchesTitle = project.title ? project.title.toLowerCase().includes(query) : false;
                        const matchesTags = Array.isArray(project.tags) ? project.tags.some((tag) => tag.toLowerCase().includes(query)) : false;
                        return matchesTitle || matchesTags;
                    }).map((project, index) => (
                        <ProjectCard key ={index} title ={project.title} tags ={project.tags} onClick ={() => showPopup(project)} />
                    ))}
                </div>
                    
                    
            )}

            {popup && (
                <ProjectPopup title ={popupData.title} tags ={popupData.tags} info ={popupData.info} onClick ={closePopup} />
            )}

        </div>
    )
};  

export default Portfolio;