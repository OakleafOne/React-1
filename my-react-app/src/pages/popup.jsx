import {useState} from "react";
import PopupWindow from "../components/popupwindow";

function Popup() {
    const [count, setCount] = useState(0);

    const myProjects = [
        {
            title: "Form",
            info: "The form lets the user chose their favorite monster energy drink and submit their choice after filling it with valid information.",
            repo: "https://github.com/OakleafOne/Form-assignment",
            tech: "I used the form tag in html and styled it with css.",
            screenshot: "../assets/form-scr.png",
        },

        {
            title: "Figma",
            info: "I learned how to create a webiste designed in figma using html and css.",
            repo: "https://github.com/OakleafOne/Figma-assignemnt",
            tech: "I used html and css to create the website from figma.",
            screenshot: "../assets/user-scr.png",
        }
    ];

    const [popupInfo, setPopupInfo] = useState({
        title: "",
        info: "",
        repo: "",
        tech: "",
        screenshot: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const openProject = (project) => {
        setPopupInfo(project);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick ={() => setIsOpen(true)}>Open popup</button>
            <h1>Counter: {count}</h1>
            <button onClick ={() => setCount(count + 1)}>Increase</button>
            <button onClick ={() => setCount(count - 1)}>Decrease</button>

            <h2>My projects</h2>
            <div>
                {myProjects.map((project, index) => (
                    <button key ={index} onClick ={() => openProject(project)}>
                        {project.title}
                    </button>
                ))}
            </div>

            {isOpen && (
                <PopupWindow title ={popupInfo.title} info ={popupInfo.info} screenshot ={popupInfo.screenshot} repo ={popupInfo.repo} tech ={popupInfo.tech} onClick ={closePopup}/>
            )}
        </div>
    );
}

export default Popup;