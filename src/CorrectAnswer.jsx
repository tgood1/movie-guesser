import { Card, Button } from "react-bootstrap";

function CorrectAnswer({ win, answer }) {
    const title = win ? "Congratulations!" : "Better luck next time";
    const loadNewGame = () => {
        window.location.reload();
    };
    return (
        <Card style={{ width: '30rem' }} border="light" className="m-2 border-0">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="movie-title" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{title}</Card.Title>
                <div>
                    The correct answer is:
                </div>
                <h3>
                    {answer.title}
                </h3>
                <img src={`https://image.tmdb.org/t/p/original/${answer.poster_path}`} alt="movie poster" className="mt-3" loading="lazy" />
                <Button className="mt-4" variant="outline-dark" onClick={loadNewGame}>New Game</Button>
            </Card.Body>
        </Card>
    );
}

export default CorrectAnswer;