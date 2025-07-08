import React, { useState } from 'react';
import Movie from './Movie';
import MovieCards from './MovieCards';
import { movies } from './data/MovieData';
import { movie } from './data/Movie';
import { Box, Button, Center, Container, Flex, SimpleGrid, Text } from '@mantine/core';
import { RecommendCards } from './RecommendCards';
import { PickListBg } from '../assets/image';

export default function MoviePage({movie}) {
  const [step, setStep] = useState('form');
  const [userName, setUserName] = useState('');
  const [movieIndex, setMovieIndex] = useState(0);

  const handleContinue = (name) => {
    setUserName(name);
    setStep('card');
  };

return (
  <>
    {step === 'form' && <Movie onContinue={handleContinue} />}

    {step === 'card' && (
      <MovieCards
        data={movies[movieIndex]}
        userName={userName}
      />
    )}

  </>
);

}
