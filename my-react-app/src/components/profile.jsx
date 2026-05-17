import "./Profile.css"

function Profile(props) {
    return (
        <div className ="profile">
        <img src ="{props.profilePic}" alt ="Profile Picture" className="img" />
            <h2 className ="profileTitle">{props.title}</h2>
            <p className ="githubRepo">{props.repo}</p>
            <p className ="usedTech">{props.tech}</p>
            <p className ="Learned">{props.learned}</p>
        </div>
  )
}

export default Profile;