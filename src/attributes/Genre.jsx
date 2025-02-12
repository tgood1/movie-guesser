import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'
// green = all genres match
// yellow = some genres match
function Genre({ genres, answerKey }) {
    let matchingGenres = genres.filter(genre => answerKey.genres.some(g => g.name === genre.name));
    let nonMatchingGenres = genres.filter(genre => !answerKey.genres.some(g => g.name === genre.name));
    let cardVariant;
    if (matchingGenres.length === answerKey.genres.length) {
        cardVariant = 'success';
    } else if (matchingGenres.length > 0) {
        cardVariant = 'warning';
    } else {
        cardVariant = 'secondary';
    }

    return (
        <Card className="parent-card-genre m-2" bg={cardVariant} text={'white'} border={cardVariant}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center parent-card-body">
                <Card.Title style={{ fontSize: '0.8rem' }}>Genres</Card.Title>
                <div className="text-center card-text" >
                    {matchingGenres.map(genre => (
                        <Card key={genre.id} bg={cardVariant} border={cardVariant} text={'white'} className="m-0">
                            <Card.Body className="attribute-card-text" style={{ padding: '0rem' }}>{genre.name}</Card.Body>
                        </Card>
                    ))}
                    {nonMatchingGenres.map(genre => (
                        <Card key={genre.id} bg="secondary" border="secondary" text={'white'} className="m-0">
                            <Card.Body className="attribute-card-text" style={{ padding: '0rem' }}>{genre.name}</Card.Body>
                        </Card>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
}

export default Genre;