//Cheatcode for updater functions in React.

import {useState} from "react";

function Updater() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count => (count + 1));
        setCount(count => (count + 1));
    };

    const decrease = () => {
        setCount(count - 1);
    };

    const reset =() => {
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick ={increase}>Increase</button>
            <button onClick ={reset}>Reset</button>
            <button onClick ={decrease}>Decrease</button>
        </div>
    )

}

export default Updater;