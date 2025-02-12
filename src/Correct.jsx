import { Card } from "react-bootstrap";
import './App.css';

function Correct() {
    return (
        <>
        <Card bg={"success"} text={"white"} className="correct-card border-0">
            <Card.Text className="correct-card-text" >Correct</Card.Text>
        </Card>
        </>
    );
}

export default Correct;