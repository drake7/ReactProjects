// Importing React library and useState hook for state management
import React, { useState } from "react";

// Importing CSS file for styling the Counter component
import './Counter.css';

const Counter = () => {
    // State: count variable to hold the counter value, initialized to 0
    // setCount is the updater function for modifying the count value
    const [count, setCount] = useState(0);

    // Event handler: Increment the count by 1
    const increment = () => setCount((prevCount) => prevCount + 1);

    // Event handler: Decrement the count by 1
    const decrement = () => setCount((prevCount) => prevCount - 1);

    // Event handler: Reset the count to 0
    const reset = () => setCount(0);

    // JSX to render the Counter component
    return (
        <div className="counter-container">
            {/* Counter title */}
            <h1>Counter App</h1>

            {/* Display the current counter value */}
            <h2 className="counter-value">{count}</h2>

            {/* Buttons to control the counter */}
            <div className="button-group">
                <button className="button" onClick={increment}>Increment</button>
                <button className="button" onClick={decrement}>Decrement</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

// Exporting the Counter component to be used in other parts of the application
export default Counter;
