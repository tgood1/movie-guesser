import { Card } from "react-bootstrap";
import './App.css';

function Incorrect() {
    return (
        <>
        <Card bg={"secondary"} text={"white"} className="correct-card border-0">
            <Card.Text className="correct-card-text" >Incorrect</Card.Text>
        </Card>
        </>
    );
}

export default Incorrect;