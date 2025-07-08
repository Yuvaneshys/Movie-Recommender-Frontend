import {
  Card,
  Image,
  Text,
  Group,
  Rating,
  Stack,
  Badge,
  Divider,
  Center,
  Flex,
  Tooltip,
} from '@mantine/core';

export function RecommendCards({ movie }) {
  // Convert 10-point IMDb rating to 5-star scale
  let ratingNumber = parseFloat(movie.imdbRating) || 0;
  ratingNumber = Math.min(5, ratingNumber / 2);

  const votesNumber = parseInt(movie.imdbVotes?.replace(/,/g, '')) || 0;
  const boxOffice = movie.BoxOffice || 'N/A';
  const genre = movie.Genre ? movie.Genre.split(',')[0] : 'N/A';
  const awards = movie.Awards || 'N/A';
  const rated = movie.Rated || 'N/A';
  const year = movie.Year || 'N/A';

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      w={250}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Card.Section>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          height={180}
          fit="cover"
        />
      </Card.Section>

      <Stack gap={4} p="xs">
        <Group justify="space-between" wrap="nowrap">
          <Text fw={600} size="sm" lineClamp={1}>
            {movie.Title}
          </Text>
          <Badge variant="light" color="blue" size="xs">
            {genre}
          </Badge>
        </Group>

        <Group gap={4}>
          <Center>
            <Rating
              // value={ratingNumber}
                value={Math.min(ratingNumber, 5)}
              fractions={2}
              readOnly
              size="xs"
            />
            <Text size="xs" c="dimmed">
          {movie.imdbRating ? `${Math.min((parseFloat(movie.imdbRating) / 2).toFixed(1), 5)} / 5` : 'N/A'}

            </Text>
          </Center>
        </Group>

        <Divider my={4} />

        <Tooltip
          label={
            <Text ta="center" c="black" maw={200}>
              {movie.Plot}
            </Text>
          }
          withArrow
          color="lightgray"
          position="right"
          multiline
          width={200}
        >
          <Text size="xs" c="dimmed" lineClamp={2}>
            {movie.Plot}
          </Text>
        </Tooltip>

        <Divider my={4} />

        <Flex direction="column" gap={4}>
          <Flex gap={8} wrap="nowrap">
            <Text size="xs" style={{ width: '80px' }}>
              <b>Year:</b>
            </Text>
            <Text size="xs">{year}</Text>
          </Flex>
          <Flex gap={8} wrap="nowrap">
            <Text size="xs" style={{ width: '80px' }}>
              <b>Rated:</b>
            </Text>
            <Text size="xs">{rated}</Text>
          </Flex>
          <Flex gap={8} wrap="nowrap">
            <Text size="xs" style={{ width: '80px' }}>
              <b>Awards:</b>
            </Text>
            <Text size="xs">{awards}</Text>
          </Flex>
          <Flex gap={8} wrap="nowrap">
            <Text size="xs" style={{ width: '80px' }}>
              <b>imdbRating:</b>
            </Text>
            <Text size="xs">{movie.imdbRating || 'N/A'}</Text>
          </Flex>
          <Flex gap={8} wrap="nowrap">
            <Text size="xs" style={{ width: '80px' }}>
              <b>imdbVotes:</b>
            </Text>
            <Text size="xs">{votesNumber.toLocaleString()}</Text>
          </Flex>
          <Flex gap={8} wrap="nowrap">
            <Text size="xs" style={{ width: '80px' }}>
              <b>BoxOffice:</b>
            </Text>
            <Text size="xs">{boxOffice}</Text>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  );
}
