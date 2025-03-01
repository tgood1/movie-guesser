import { Card } from "react-bootstrap";

// yellow = within 20 min
function Runtime({ runtime, answerKey }) {
    const diff = runtime - answerKey.runtime;
    let cardVariant;
    if (runtime === answerKey.runtime) {
        cardVariant = 'success';
    } else if (Math.abs(diff) <= 20) {
        cardVariant = 'warning';
    } else {
        cardVariant = 'secondary';
    }
    
    return (
        <Card className="runtime-card m-2" bg={cardVariant} text={'white'} border={cardVariant}>
            <Card.Body className="attribute-card-body d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="attribute-title">Runtime</Card.Title>
                <Card.Text className="attribute-value">
                    {runtime} min
                    {diff > 0 && <i className="bi bi-caret-down-fill"></i>}
                    {diff < 0 && <i className="bi bi-caret-up-fill"></i>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Runtime;