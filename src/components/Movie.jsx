import React, { useState } from 'react';
import {
  Button,
  Card,
  Flex,
  Text,
  TextInput,
  Image,
  Group,
  Stack,
  Divider,
  Modal,
  Rating,
  Box,
  Container,
  Center,
  SimpleGrid,
} from '@mantine/core';

import MovieImage from '../assets/image/MovieBackground.jpg';
import { PickListBg } from '../assets/image';
import { RecommendCards } from './RecommendCards';

export default function Movie() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [step, setStep] = useState('form');
  const [username, setUsername] = useState('');
  const [opened, setOpened] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [moviesData, setMoviesData] = useState({});
  const [currentMovie, setCurrentMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalRatedCount, setTotalRatedCount] = useState(0);

  const MAX_RATINGS = 10;
  const OMDB_KEY = 'fdd792f1';

  const handleContinue = async () => {
    if (username.trim() === '') return;
    setLoading(true);
    try {
      await fetchNewBatch();
    } catch (error) {
      console.error('Error in handleContinue:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNewBatch = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/getMovies?moviesCount=15');
      const data = await response.json();
      if (!data.movies || data.movies.length === 0) {
        throw new Error('Backend returned empty movie list!');
      }
      setMoviesData(data);
      setCurrentIndex(0);
      await getMovieMetaData(0, data);
    } catch (error) {
      console.error('❌ Error fetching new batch:', error);
    }
  };

  const fetchMovieFromOMDb = async (rawTitle) => {
    const searchTitle = rawTitle.split('(')[0].trim();
    const searchURL = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${encodeURIComponent(searchTitle)}`;
    const searchResp = await fetch(searchURL);
    const searchData = await searchResp.json();

    if (searchData.Response !== 'True' || !searchData.Search || searchData.Search.length === 0) {
      console.warn(`❌ OMDb SEARCH failed for "${searchTitle}"`);
      return null;
    }

    const imdbID = searchData.Search[0].imdbID;
    const detailURL = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${imdbID}`;
    const detailResp = await fetch(detailURL);
    const details = await detailResp.json();

    if (details.Response !== 'True' || !details.Poster || details.Poster === 'N/A') {
      return null;
    }

    return details;
  };

  const getMovieMetaData = async (index, data = moviesData) => {
    if (!data.movies || index >= data.movies.length || totalRatedCount >= MAX_RATINGS) {
      setStep('done');
      return;
    }

    setLoading(true);
    const rawTitle = data.movies[index].title;
    try {
      const details = await fetchMovieFromOMDb(rawTitle);
      if (details) {
        setCurrentMovie(details);
        setCurrentIndex(index);
        setStep('card');
      }
    } catch (error) {
      console.error('❌ Error in getMovieMetaData:', error);
    } finally {
      setLoading(false);
    }
  };

  const goToNextMovie = () => {
    setOpened(false);
    setUserRating(0);
    const newCount = totalRatedCount + 1;
    setTotalRatedCount(newCount);

    if (newCount >= MAX_RATINGS) {
      setStep('done');
      return;
    }

    getMovieMetaData(currentIndex + 1);
  };

  const handleRate = () => {
    const data = { ...moviesData };
    if (data.movies && data.movies[currentIndex]) {
      data.movies[currentIndex].rating = userRating;
    }
    setMoviesData(data);
    goToNextMovie();
  };

  return (
    <>
      {step === 'recommendations' ? (
        <Box
          style={{
            minHeight: '100vh',
            backgroundImage: `url(${PickListBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '2rem',
          }}
        >
          <Container size="xl" p={20} my="md">
            <Flex align="center" justify="space-between" mb="md">
              <Center style={{ flex: 1 }}>
                <Text fw={800} fz={50} ta="center">
                  Picks For You...
                </Text>
              </Center>
              <Button
                variant="filled"
                color="dark"
                onClick={() => setStep('form')}
              >
                Home
              </Button>
            </Flex>

            <SimpleGrid
              cols={5}
              spacing="lg"
              breakpoints={[
                { maxWidth: 1200, cols: 4, spacing: 'md' },
                { maxWidth: 992, cols: 3, spacing: 'sm' },
                { maxWidth: 768, cols: 2, spacing: 'sm' },
                { maxWidth: 576, cols: 1, spacing: 'sm' },
              ]}
            >
              {recommendedMovies.slice(0, 10).map((mo) => (
                <RecommendCards
                  key={mo.imdbID}
                  movie={mo}
                  onClick={() => {
                    setStep('form');
                    setUsername('');
                    setMoviesData({});
                    setCurrentMovie({});
                    setCurrentIndex(0);
                    setTotalRatedCount(0);
                    setRecommendedMovies([]);
                  }}
                />
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      ) : (
        <Flex
          style={{
            height: '100vh',
            backgroundImage: `url(${MovieImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          align="center"
          justify="flex-end"
          px={100}
        >
          <Card
            shadow="md"
            radius="sm"
            withBorder
            padding="lg"
            style={{
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              maxWidth: 420,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {step === 'form' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleContinue();
                }}
              >
                <TextInput
                  radius="md"
                  label="User Name"
                  withAsterisk
                  placeholder="Enter a User Name"
                  mb="lg"
                  value={username}
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
                <Text size="xl" mb="md" ta="center">
                  Please Help Us To Recommend a Movie
                </Text>
                <Button
                  type="submit"
                  variant="filled"
                  color="indigo"
                  size="md"
                  radius="md"
                  fullWidth
                  loading={loading}
                >
                  Continue
                </Button>
              </form>
            )}

            {step === 'card' && currentMovie && (
              <>
                <Modal
                  opened={opened}
                  onClose={() => setOpened(false)}
                  withCloseButton={false}
                  centered
                  radius="md"
                  size="sm"
                  overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                  }}
                >
                  <Stack gap="xs" align="center" mt="md">
                    <Text fw={700} size="md">
                      RATE THIS MOVIE
                    </Text>
                    <Text fw={600} size="lg">
                      {currentMovie.Title}
                    </Text>
                    <Rating value={userRating} onChange={setUserRating} size="xl" />
                    <Button
                      fullWidth
                      mt="md"
                      disabled={userRating === 0}
                      onClick={handleRate}
                    >
                      Submit Rating
                    </Button>
                  </Stack>
                </Modal>

                <Stack gap="sm">
                  <Text
                    fw={600}
                    size="md"
                    ta="center"
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'lightblue',
                      padding: '6px 12px',
                      borderRadius: '6px',
                    }}
                  >
                    Welcome, {username}!
                  </Text>

                  <Card.Section>
                    <Image
                      src={currentMovie.Poster}
                      alt={currentMovie.Title}
                      height={300}
                      fit="cover"
                    />
                  </Card.Section>
                  <Group justify="space-between">
                    <Text size="lg" fw={700}>
                      {currentMovie.Title}
                    </Text>
                  </Group>

                  <Text size="sm" c="dimmed">
                    {currentMovie.Year} • {currentMovie.Runtime} • {currentMovie.Rated}
                  </Text>

                  <Divider />

                  <Text size="sm">{currentMovie.Plot}</Text>

                  <Divider />

                  <Stack gap="xs">
                    <Text size="sm">
                      <Text span fw={600}>Director:</Text> {currentMovie.Director}
                    </Text>
                    <Text size="sm">
                      <Text span fw={600}>Writer:</Text> {currentMovie.Writer}
                    </Text>
                    <Text size="sm">
                      <Text span fw={600}>Stars:</Text> {currentMovie.Actors}
                    </Text>
                  </Stack>

                  <Flex gap="sm" mt="md">
                    <Button fullWidth color="blue" variant="filled" onClick={() => setOpened(true)}>
                      Rate
                    </Button>
                    <Button fullWidth variant="default" onClick={handleRate}>
                      Skip
                    </Button>
                  </Flex>
                </Stack>
              </>
            )}

            {step === 'done' && (
              <Stack gap="md" align="center">
                <Text fw={700} size="lg" ta="center">
                  Thanks for Rating!!!
                </Text>
                <Button
                  onClick={async () => {
                    setLoading(true);
                    try {
                      const response = await fetch('http://127.0.0.1:8000/recommendMovies', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(moviesData),
                      });

                      if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                      }

                      const data = await response.json();
                      if (!data || data.length === 0) {
                        throw new Error('No recommended movies returned from backend!');
                      }

                      setRecommendedMovies(data);
                      setStep('recommendations');
                    } catch (error) {
                      console.error('Error fetching recommendations:', error);
                    } finally {
                      setLoading(false);
                    }
                  }}
                  loading={loading}
                >
                  Explore Recommended Movies
                </Button>
              </Stack>
            )}
          </Card>
        </Flex>
      )}
    </>
  );
}
