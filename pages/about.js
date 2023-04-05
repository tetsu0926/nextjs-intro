import {useState} from "react";
import NavBar from "./componets/NavBar";

export default function About() {


    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>about {counter}</h1>
            <button onClick = {() => setCounter((prev)=> prev+1)}>+</button>
        </div>
    );
};