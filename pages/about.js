import { useState } from "react";
import NavBar from "./componets/NavBar";
import Title from "./componets/Title";

export default function About() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <Title title="About" />
            <h1>about {counter}</h1>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </div>
    );
}
