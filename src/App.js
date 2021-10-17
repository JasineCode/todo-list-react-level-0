import React, { useState, useCallback } from "react";

function Button(props) {
    return <button onClick={props.onClick}>{props.name}</button>;
}

function App() {
    const [count, setCount] = useState(0);
    const [isActive, setActive] = useState(false);

    const handleCount = useCallback(() => setCount(count + 1), [count]);
    const handleShow = useCallback(() => setActive(!isActive), [isActive]);

    return (
        <div className="App">
            {isActive && (
                <div>
                    <h1>{count}</h1>
                    <Button onClick={handleCount} name="Increment" />
                </div>
            )}
            <Button
                onClick={handleShow}
                name={isActive ? "Hide Counter" : "Show Counter"}
            />
        </div>
    );
}

export default App