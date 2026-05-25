import {useState} from "react";

function Objects() {
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handleYearChange(e) {
        setCar(car => ({...car, year: event.target.value}));
    };

    function handleMakeChange(e) {
        setCar(car => ({...car, make: event.target.value}));
    };

    function handleModelChange(e) {
        setCar(car => ({...car, model: event.target.value}));
    };
    
    return (
        <div>
            <p>Your favorite car is a {car.year} {car.make} {car.model}.</p>
            <input type ="number" value ={car.year} onChange ={handleYearChange} />
            <br />
            <input type ="text" value ={car.make} onChange ={handleMakeChange}/>
            <br />
            <input type ="text" value ={car.model} onChange ={handleModelChange}/>
        </div>
    )

};

export default Objects;