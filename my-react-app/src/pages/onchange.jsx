//"Cheatcode" for onChange event.

import {useState} from "react";

function OnChange() {
    const [name, setName] = useState("Guest");

    function handleNameChange(e) {
        setName(e.target.value)
    }

    const [quantity, setQuantity] = useState(0);
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const [comment, setComment] = useState("");
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const [payment, setPayment] = useState("");
    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const [shipping, setShipping] = useState("Pick-up");
    const handleRadioChange = (e) => {
        setShipping(e.target.value);
    }

    return (
        <div>
            <h2>Checkout</h2>
            <input type ="text" value ={name} onChange = {handleNameChange} />
            <p>Name: {name}</p>

            <br />

            <input type ="number" value ={quantity} onChange ={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <br />

            <textarea value ={comment} placeholder ="enter comment" onChange ={handleCommentChange}></textarea>
            <p>comment: {comment}</p>

            <br />

            <select value ={payment} onChange ={handlePaymentChange}>
                <option value ="">Select payment option</option>
                <option value ="Visa">Visa</option>
                <option value ="MasterCard">MasterCard</option>
                <option value ="Gift card">Gift card</option>
            </select>
            <p>Payment: {payment}</p>

            <br />

            <label>
                <input type ="radio" value ="Pick-up" checked ={shipping === "Pick-up"} onChange ={handleRadioChange}/>Pick-up
            </label>
            <br />
            <label>
                <input type ="radio" value ="Delivery" checked ={shipping === "Delivery"} onChange ={handleRadioChange}/>Delivery
            </label>
            <p>Shipping method: {shipping}</p>

        </div>
    )

}

export default OnChange;