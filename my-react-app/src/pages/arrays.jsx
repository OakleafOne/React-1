import {useState} from "react";

function Arrays() {
    const [input, setInput] = useState("");
    const [food, setFood] = useState(["apples", "oranges", "bananas"]);
    
    const changeInput = (e) => {
        setInput(e.target.value);
    };

    const addItem = () => {
        setFood(food => [...food, input]);
        setInput("");
    };

    const removeItem = (index) => {
        setFood((food) => food.filter((Element, i) => i !== index));
    }

    return (
        <>
            <h1>Shopping Cart</h1>
            <input type ="text" value ={input} onChange ={(e) => changeInput(e)} />
            <button onClick ={addItem}>Add</button>
            <ul>
                {food.map((item, index) => (
                    <li key ={index} onClick ={() => removeItem(index)}>{item}</li>
                ))}
            </ul>
        </>
    )
};

export default Arrays;