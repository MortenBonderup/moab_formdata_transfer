import { useLocation } from "react-router-dom"

export default function ResultPage(props) {
    const location = useLocation();

    return <div>
        <p>Name: {location.state.name} </p>
        <p>Age: {location.state.age} </p>
        </div>

}

