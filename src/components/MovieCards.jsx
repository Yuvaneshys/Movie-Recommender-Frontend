import React, { useState } from 'react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Stack,
  Flex,
  Divider,
  Modal,
  Rating,
} from '@mantine/core';

export default function MovieCards({ data, userName }) {
  const [opened, setOpened] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const handleRate = () => {
    setOpened(false);
    setUserRating(0);
  };
  
const handleSkip = () => {
  const data = moviesData;
  if (data.movies && data.movies[currentIndex]) {
    data.movies[currentIndex].rating = 0;  // Mark skipped with 0 rating
  }
  setMoviesData(data);
  goToNextMovie();
};

  return (
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
            {data.Title}
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
  {/* <Card
      shadow="sm"
      radius="md"
      withBorder
      w={220}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    ></Card> */}
      <Card
        shadow="md"
        padding="lg"
        radius="md"
        withBorder
        maw={400}
        mx="auto"
        bg="dark.7"
      >
       <Card.Section>
      <Image
        src={data.Poster}
        alt={data.Title}
        fit="cover"
        aspectRatio={2 / 3}
        radius="md"
        withPlaceholder
      />
    </Card.Section>


        <Stack gap="sm" mt="md">
          <Group justify="space-between">
            <Text size="lg" fw={700} c="white">
              {data.Title}
            </Text>
            <Badge color="gray" variant="light">
              {data.Genre.split(',')[0]}
            </Badge>
          </Group>

          <Text size="sm" c="gray.4">
            {data.Year} • {data.Runtime} • {data.Rated}
          </Text>

          <Divider color="gray.7" />

          <Text size="sm" c="gray.3">
            {data.Plot}
          </Text>

          <Divider color="gray.7" />

          <Stack gap="xs">
            <Text size="sm" c="gray.4">
              <Text span fw={600} c="white">
                Director:
              </Text>{' '}
              {data.Director}
            </Text>
              <Text span fw={600} c="white">
                Director:
              </Text>{' '}
              {data.Writer}
            <Text size="sm" c="gray.4">
              <Text span fw={600} c="white">
                Stars:
              </Text>{' '}
              {data.Actors}
            </Text>
          </Stack>

          <Flex gap="sm" mt="md">
            <Button
              fullWidth
              color="blue"
              variant="filled"
              onClick={() => setOpened(true)}
            >
              Rate
            </Button>
            <Button fullWidth  onClick={handleSkip} variant="default">
              Skip
            </Button>
          </Flex>
        </Stack>
      </Card>
    </>
  );
}
