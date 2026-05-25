import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/portfolio">Portfolio</Link></li>
                    <li><Link to ="/onchange">OnChange</Link></li>
                    <li><Link to ="/updaterfunction">Updater Function</Link></li>
                    <li><Link to ="/objects">Objects</Link></li>
                    <li><Link to ="/arrays">Arrays</Link></li>
                    <li><Link to ="/popup">Popup</Link></li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;