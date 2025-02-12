import React, { useState, useRef } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Button, Stack, Form } from 'react-bootstrap';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { API_OPTIONS } from './apiConfig';

function SearchBar({ addGuess, numGuesses }) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [options, setOptions] = useState([]);
  const typeaheadRef = useRef(null);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
      .then((resp) => resp.json())
      .then(({ results }) => {
        setOptions(results);
        setIsLoading(false);
      });
  };

  const handleChange = (selected) => {
    if (selected.length > 0) {
      setSelectedMovieId(selected[0].id);
    } else {
      setSelectedMovieId(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addGuess(selectedMovieId);
    console.log('movie ID:', selectedMovieId);
    if (typeaheadRef.current) {
      typeaheadRef.current.clear();
    }
  };

  const filterBy = () => true;

  return (
    <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '14vh' }}>
      <Form.Group style={{ width: '30rem' }}>
        <Form.Label>Guess {numGuesses + 1} out of 10</Form.Label>
        <Stack direction="horizontal" gap={3}>
        <AsyncTypeahead
          ref={typeaheadRef}
          filterBy={filterBy}
          id="async-example"
          isLoading={isLoading}
          labelKey="title"
          minLength={3}
          onSearch={handleSearch}
          onChange={handleChange}
          options={options}
          placeholder="Guess a movie..."
          style={{ width: '100%' }}
        />
      
      
        <input type="hidden" name="movieId" value={selectedMovieId || ''} />
        <Button type="submit" variant="outline-primary" disabled={!selectedMovieId}>Guess</Button>
      </Stack>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;