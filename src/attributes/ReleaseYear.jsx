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
        <Card style={{ width: '8rem', padding: '0.1rem' }} bg={cardVariant} text={'white'} border={cardVariant} className="m-2">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '0.5rem' }}>
                <Card.Title style={{ fontSize: '0.8rem' }}>Release Year</Card.Title>
                <Card.Text style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {year} 
                    {diff > 0 && <i className="bi bi-caret-down-fill"></i>}
                    {diff < 0 && <i className="bi bi-caret-up-fill"></i>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ReleaseYear;