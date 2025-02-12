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
        <Card style={{ width: '9rem', padding: '0.1rem' }} bg={cardVariant} text={'white'} border={cardVariant} className="m-2">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '0.5rem' }}>
                <Card.Title style={{ fontSize: '0.8rem' }}>Runtime</Card.Title>
                <Card.Text className="attribute-card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {runtime} min
                    {diff > 0 && <i className="bi bi-caret-down-fill"></i>}
                    {diff < 0 && <i className="bi bi-caret-up-fill"></i>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Runtime;