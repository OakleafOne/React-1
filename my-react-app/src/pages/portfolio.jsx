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
};  

export default Portfolio;