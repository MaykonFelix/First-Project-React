import "./style.css";

export default function Card(props) {
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <smal>{props.time}</smal>
        </div>
    );
}
