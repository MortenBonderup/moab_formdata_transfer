import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 📁 pages/HomePage.js
export default function HomePage() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();
         navigate('result', {
            state: {
                name: name,
                age: age
            }
         })
    }

    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} placeholder="Your name" onChange={e => setName(e.target.value)} />
        <input type="number" name="age" value={age} placeholder="Your age" onChange={e => setAge(e.target.value)} />
        <br></br><button>Send</button>
    </form>
    
    
    </>;
}