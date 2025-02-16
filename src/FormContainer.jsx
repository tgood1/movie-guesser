import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import MovieGuessCard from './MovieGuessCard';
import { useState, useEffect, useMemo, useRef, use } from 'react';
import HowToPlay from './HowToPlay';
import './App.css';
import { Stack } from 'react-bootstrap';
import { API_OPTIONS } from './apiConfig';
import CorrectAnswer from './CorrectAnswer';

function FormContainer() {
    const [guesses, setGuesses] = useState([]);
    const [answerKey, setAnswerKey] = useState([]);
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [wonGame, setWonGame] = useState(false);
    const movieDetailsCache = useRef({});

    const addGuess = async (guessMovieId) => {
        console.log("add guess!")
        if (!movieDetailsCache.current[guessMovieId]) {


            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${guessMovieId}`, API_OPTIONS);
                const detailsData = await response.json();

                const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${guessMovieId}/credits`, API_OPTIONS);
                const castData = await castResponse.json();

                movieDetailsCache.current[guessMovieId] = {
                    title: detailsData.title,
                    runtime: detailsData.runtime,
                    fanRating: detailsData.vote_average,
                    genres: detailsData.genres,
                    releaseYear: detailsData.release_date.slice(0, 4),
                    cast: castData.cast.slice(0, 3),
                    poster_path: detailsData.poster_path
                };

            } catch (error) {
                console.error('Error fetching movie details:', error);
                return;
            }
        }
        setGuesses((prev) => [guessMovieId, ...prev]);
    };

    useEffect(() => {
        console.log(answerKey.id);
        if (guesses.length && guesses[0] === answerKey.id) {
            setWonGame(true);
            setGameOver(true);
        }
        else if (guesses.length === 10) {
            setGameOver(true);
        }
    }, [guesses, answerKey]);


    useEffect(() => {
        const randomPage = Math.floor(Math.random() * 2) + 1;
        const randomMovieIndex = Math.floor(Math.random() * 20);
        const fetchAnswerKey = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${randomPage}&region=United%20States`, API_OPTIONS);
                const data = await response.json();

                const detailsResp = await fetch(`https://api.themoviedb.org/3/movie/${data.results[randomMovieIndex].id}`, API_OPTIONS);
                const detailsData = await detailsResp.json();

                const castResp = await fetch(`https://api.themoviedb.org/3/movie/${data.results[randomMovieIndex].id}/credits`, API_OPTIONS);
                const castData = await castResp.json();

                setAnswerKey({
                    title: detailsData.title,
                    id: detailsData.id,
                    runtime: detailsData.runtime,
                    fanRating: detailsData.vote_average.toFixed(1),
                    genres: detailsData.genres,
                    cast: castData.cast.slice(0, 3),
                    releaseYear: detailsData.release_date.slice(0, 4),
                    poster_path: detailsData.poster_path,
                })

            } catch (error) {
                console.error('Error fetching answer key:', error);
            }
        };

        fetchAnswerKey();
    }, []);
    const memoizedGuessCards = useMemo(() => {
        return guesses.map(guessMovieId => (
            <MovieGuessCard key={guessMovieId} movieDetails={movieDetailsCache.current[guessMovieId]} answerKey={answerKey} />
        ));
    }, [guesses]);
    console.log(answerKey)
    return (
        !showHowToPlay ? (
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Stack direction="horizontal" gap={2} className="m-3">
                            <h1 >Movie Guessr</h1>
                            <a href="#" onClick={() => setShowHowToPlay(true)} style={{ fontSize: '1.0rem' }} title="How to Play">
                                <i className="bi bi-question-circle"></i>
                            </a>

                        </Stack>
                    </Col>

                </Row>
                <Row>
                    <Col><SearchBar addGuess={addGuess} numGuesses={guesses.length} gameOver={gameOver} /></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        {gameOver ? <CorrectAnswer win={wonGame} answer={answerKey} /> : null}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        {memoizedGuessCards}
                    </Col>
                </Row>
            </Container>
        ) : (<Container fluid>
            <Row className="justify-content-center">
                <Col className="d-flex justify-content-center">
                    <HowToPlay setHelpVisible={setShowHowToPlay} />
                </Col>
            </Row>
        </Container>)
    );
}

export default FormContainer;