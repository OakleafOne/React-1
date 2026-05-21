// "Cheatcode" for me too remember how to use useState in React.

import {useState} from "react";

function UseState() {
    const [name, setName] = useState("Guest");
    const updateName = () => {
        setName("Oliver");
    }

    const [age, setAge] = useState(0);
    const increaseAge =() => {
        setAge(age + 1);
    }

    return (
        <div>
            <button onClick = {updateName}>Set Name</button>
            <h2>Name: {name} </h2>

            <br />

            <button onClick = {increaseAge}>Increase Age</button>
            <h2>Age: {age}</h2>
        </div>
    )
}

export default UseState;