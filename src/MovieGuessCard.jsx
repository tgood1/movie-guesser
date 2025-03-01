import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Runtime from './attributes/Runtime';
import FanRating from './attributes/FanRating';
import ReleaseYear from './attributes/ReleaseYear';
import Genre from './attributes/Genre';
import Cast from './attributes/Cast';
import { Stack } from 'react-bootstrap';
import './App.css';

function MovieGuessCard({ movieDetails, answerKey }) {

    return (
        <Card border="light" className="m-2 border-0 movie-guess-card">
            <Card.Body >
                <Card.Title className="movie-title" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{movieDetails.title}</Card.Title>
                <div>
                    <Stack direction="horizontal" gap={2}>
                        <Cast cast={movieDetails.cast} answerKey={answerKey} />
                        <Stack gap={0}>
                            <ReleaseYear year={movieDetails.releaseYear} answerKey={answerKey} />
                            <FanRating rating={movieDetails.fanRating.toFixed(1)} answerKey={answerKey} />
                        </Stack>
                    </Stack>
                    <Stack direction="horizontal" gap={0}>
                        <Stack gap={1}>
                            <Runtime runtime={movieDetails.runtime} answerKey={answerKey} />
                            <Genre genres={movieDetails.genres} answerKey={answerKey} />
                        </Stack>
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt="movie poster" className="mt-3" loading="lazy" />
                    </Stack>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MovieGuessCard;