import { Card } from "react-bootstrap";
import './App.css';

function Close({text}) {
    return (
        <>
        <Card bg={"warning"} text={"white"} className="close-card border-0">
            {text}
        </Card>
        </>
    );
}

export default Close;