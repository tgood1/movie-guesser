import { Card } from "react-bootstrap";

function FanRating({ rating, answerKey }) {
    const diff = rating - answerKey.fanRating;
    let cardVariant;
    if ( rating === answerKey.fanRating) {
        cardVariant = 'success';
    } else if ( Math.abs(diff) <= 1.0) {
        cardVariant = 'warning';
    } else {
        cardVariant = 'secondary';
    }
    return (
        <Card style={{ width: '8rem', padding: '0.1rem' }} bg={cardVariant} text={'white'} border={cardVariant} className="m-2">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '0.5rem' }}>
                <Card.Title style={{ fontSize: '0.8rem' }}>Avg. Fan Vote</Card.Title>
                <Card.Text className="attribute-card-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {rating}
                    {diff > 0 && <i className="bi bi-caret-down-fill"></i>}
                    {diff < 0 && <i className="bi bi-caret-up-fill"></i>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FanRating;