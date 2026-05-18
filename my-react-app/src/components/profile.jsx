import "./Profile.css"
import profilePic from "../assets/user-scr.png"

function Profile(props) {
    return (
        <div className ="profile">
        <img src ={profilePic} alt ="Profile Picture" className="img" />
            <h2 className ="profileTitle">{props.title}</h2>
            <p className ="githubRepo">{props.repo}</p>
            <p className ="usedTech">{props.tech}</p>
            <p className ="Learned">{props.learned}</p>
        </div>
  )
}

export default Profile;

// This is a work in progress, it does not look very good yet as I focus more on catching up on the assignments. :)