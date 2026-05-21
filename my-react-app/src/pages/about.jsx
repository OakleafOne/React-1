import Profile from "../components/Profile";

function About() {
    return (
        <div>
            <h2>About</h2>
            <Profile profilePic ="" title ="My first website" repo ="https://github.com/OakleafOne/f-rsta-hemsida" tech ="I used standard HTML code to learn HTML" learned ="I learned basic HTML code to create a simple website"></Profile>
            <Profile title ="SVG Training" repo ="https://github.com/OakleafOne/SVG" tech ="I used SVG and animate.css to create an invitation card" learned ="I learned how to create SVGs aswell as using animate.css"></Profile>
            <Profile title ="Form Training" repo ="https://github.com/OakleafOne/Form-assignment" tech ="I made a form using the form tags in HTML and flexbox in CSS" learned ="I learned how to create forms and style them to clearly display the information"></Profile>
        </div>
    )
}

export default About;