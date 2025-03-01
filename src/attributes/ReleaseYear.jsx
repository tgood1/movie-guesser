import React from 'react';
import Card from 'react-bootstrap/Card';

function ReleaseYear({ year, answerKey }) {
    const diff = year - answerKey.releaseYear;
    let cardVariant;
    if (year === answerKey.releaseYear) {
        cardVariant = 'success';
    } else if (Math.abs(diff) <= 10) {
        cardVariant = 'warning';
    } else {
        cardVariant = 'secondary';
    }

    return (
        <Card className="year-card m-2" bg={cardVariant} text={'white'} border={cardVariant}>
            <Card.Body className="attribute-card-body d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="attribute-title">Release Year</Card.Title>
                <Card.Text className="attribute-value">
                    {year} 
                    {diff > 0 && <i className="bi bi-caret-down-fill"></i>}
                    {diff < 0 && <i className="bi bi-caret-up-fill"></i>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ReleaseYear;