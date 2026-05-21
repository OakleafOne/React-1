import {useState} from "react";
import ProjectList from "../components/Project-list";

function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);
    
    
    return (
        <div>
            <h2>Portfolio</h2>

            <button onClick ={() => setShowProjects(true)}>View my projects.</button>

            {showProjects && <ProjectList />}
        </div>
    )
}

export default Portfolio;