import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'

// green = all movie's top 3 cast members match
// yellow = some of the top 3 cast members match
function Cast({ cast, answerKey }) {
    let matchingCast = cast.filter(castMember => answerKey.cast.some(c => c.id === castMember.id));
    let nonMatchingCast = cast.filter(castMember => !answerKey.cast.some(c => c.id === castMember.id));
    let cardVariant;
    if (matchingCast.length === answerKey.cast.length) {
        cardVariant = 'success';
    } else if (matchingCast.length > 0) {
        cardVariant = 'warning';
    } else {
        cardVariant = 'secondary';
    }

    return (
        <Card className="parent-card-cast m-2" bg={cardVariant} text={'white'} border={cardVariant}>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center parent-card-body">
          <Card.Title style={{ fontSize: '0.8rem' }}>Top Cast</Card.Title>
          <div className="text-center card-text" >
            {matchingCast.map(castMember => (
              <Card key={castMember.id} bg={cardVariant} border={cardVariant} text={'white'} className="m-0">
                <Card.Body className="attribute-card-text" style={{padding: '0rem'}}>{castMember.name}</Card.Body>
              </Card>
            ))}
            {nonMatchingCast.map(castMember => (
              <Card key={castMember.id} bg="secondary" border="secondary" text={'white'} className="m-0">
                <Card.Body className="attribute-card-text" style={{padding: '0rem'}}>{castMember.name}</Card.Body>
              </Card>
            ))}
          </div>
        </Card.Body>
      </Card>
    );
}

export default Cast;