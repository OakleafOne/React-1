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
            tags: "",
            info: "",
        },
        {
            title: "Project: SVG",
            tags: "",
            info: "",
        },
        {
            title: "Project: Form",
            tags: "",
            info: "",
        },
        {
            title: "Project: Grid",
            tags: "",
            info: "",
        },
        {
            title: "Project: Flexbox",
            tags: "",
            info: "",
        },
        {
            title: "Project: JavaScript variables and operators",
            tags: "",
            info: "",
        },
        {
            title: "Project: Form",
            tags: "",
            info: "",
        },
        {
            title: "",
            tags: "",
            info: "",
        },
        {
            title: "",
            tags: "",
            info: "",
        },
        {
            title: "",
            tags: "",
            info: "",
        },
    ];

    const showPopup = (index) => {
        setPopup(true);
        setPopupData({
            title: projects[index].title,
            tags: projects[index].tags,
            info: projects[index].info,
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
                    <input type ="text" plceholder ="Search projects..." value ={search} className ="search-input" onChange ={(e) => setSearch(e.target.value)} />
                </div>
            )}

            {preview && (
                <div className ="project-list">
                    {projects.filter((project) => 
                    (project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))))
                    
                    .map((project, index) => (
                        <Card key ={index} title ={project.title} tags ={project.tags} onClick ={() => showPopup(index)} />
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