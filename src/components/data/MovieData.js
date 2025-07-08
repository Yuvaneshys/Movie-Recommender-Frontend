// `http://www.omdbapi.com/?t=${movie_name}`

export const movies = [
  {
    Title: "Toy Story",
    Year: "1995",
    Rated: "G",
    Runtime: "81 min",
    Genre: "Animation, Adventure, Comedy",
    Director: "John Lasseter",
    Actors: "Tom Hanks, Tim Allen, Don Rickles",
    Plot: "A cowboy doll is profoundly jealous when a new spaceman action figure supplants him.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Runtime: "148 min",
    Genre: "Action, Sci-Fi, Thriller",
    Director: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    Plot: "A thief who steals corporate secrets through dream-sharing technology.",
    Poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Runtime: "152 min",
    Genre: "Action, Crime, Drama",
    Director: "Christopher Nolan",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    Plot: "Batman faces the Joker, a criminal mastermind bent on chaos.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    Plot: "A team of explorers travel through a wormhole in space.",
    Poster: "https://tse2.mm.bing.net/th/id/OIP.uiaj_IMaC7h3NoieAhcmVwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    Title: "Pulp Fiction",
    Year: "1994",
    Rated: "R",
    Runtime: "154 min",
    Genre: "Crime, Drama",
    Director: "Quentin Tarantino",
    Actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
    Plot: "The lives of two mob hitmen, a boxer, and others intertwine.",
    Poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
  },
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    Rated: "R",
    Runtime: "142 min",
    Genre: "Drama",
    Director: "Frank Darabont",
    Actors: "Tim Robbins, Morgan Freeman",
    Plot: "Two imprisoned men bond over years, finding redemption.",
    Poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
  },
  {
    Title: "Forrest Gump",
    Year: "1994",
    Rated: "PG-13",
    Runtime: "142 min",
    Genre: "Drama, Romance",
    Director: "Robert Zemeckis",
    Actors: "Tom Hanks, Robin Wright, Gary Sinise",
    Plot: "Forrest Gump, a man with a low IQ, witnesses defining events.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "The Matrix",
    Year: "1999",
    Rated: "R",
    Runtime: "136 min",
    Genre: "Action, Sci-Fi",
    Director: "The Wachowskis",
    Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    Plot: "A computer hacker learns about the true nature of reality.",
    Poster: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg"
  },
  {
    Title: "Gladiator",
    Year: "2000",
    Rated: "R",
    Runtime: "155 min",
    Genre: "Action, Adventure, Drama",
    Director: "Ridley Scott",
    Actors: "Russell Crowe, Joaquin Phoenix",
    Plot: "A former Roman General seeks revenge for his family's murder.",
    Poster: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "The Godfather",
    Year: "1972",
    Rated: "R",
    Runtime: "175 min",
    Genre: "Crime, Drama",
    Director: "Francis Ford Coppola",
    Actors: "Marlon Brando, Al Pacino, James Caan",
    Plot: "The aging patriarch of an organized crime dynasty transfers control.",
    Poster: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg"
  },
  {
    Title: "Fight Club",
    Year: "1999",
    Rated: "R",
    Runtime: "139 min",
    Genre: "Drama",
    Director: "David Fincher",
    Actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    Plot: "An insomniac office worker forms an underground fight club.",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "Jurassic Park",
    Year: "1993",
    Rated: "PG-13",
    Runtime: "127 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Steven Spielberg",
    Actors: "Sam Neill, Laura Dern, Jeff Goldblum",
    Plot: "Scientists clone dinosaurs for a theme park, with dangerous results.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
  },
  {
    Title: "The Lion King",
    Year: "1994",
    Rated: "G",
    Runtime: "88 min",
    Genre: "Animation, Adventure, Drama",
    Director: "Roger Allers, Rob Minkoff",
    Actors: "Matthew Broderick, Jeremy Irons, James Earl Jones",
    Plot: "Lion prince Simba flees after his father's death.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    Rated: "PG-13",
    Runtime: "143 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Joss Whedon",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot: "Earth's mightiest heroes must come together to stop Loki.",
    Poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana",
    Plot: "A paraplegic Marine is dispatched to Pandora on a mission.",
    Poster: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg"
  },
  {
    Title: "Titanic",
    Year: "1997",
    Rated: "PG-13",
    Runtime: "195 min",
    Genre: "Drama, Romance",
    Director: "James Cameron",
    Actors: "Leonardo DiCaprio, Kate Winslet",
    Plot: "A love story unfolds aboard the ill-fated Titanic.",
    Poster: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "Star Wars: A New Hope",
    Year: "1977",
    Rated: "PG",
    Runtime: "121 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "George Lucas",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
    Plot: "Luke Skywalker joins the fight against the Empire.",
    Poster: "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SY679_.jpg"
  },
  {
    Title: "Back to the Future",
    Year: "1985",
    Rated: "PG",
    Runtime: "116 min",
    Genre: "Adventure, Comedy, Sci-Fi",
    Director: "Robert Zemeckis",
    Actors: "Michael J. Fox, Christopher Lloyd",
    Plot: "A teenager travels back in time in a DeLorean.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title: "Schindler's List",
    Year: "1993",
    Rated: "R",
    Runtime: "195 min",
    Genre: "Biography, Drama, History",
    Director: "Steven Spielberg",
    Actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    Plot: "A businessman saves Jewish lives during the Holocaust.",
    Poster: "https://tse3.mm.bing.net/th/id/OIP.IxTgcmpZDCkzFwfGkOXSsQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    Title: "The Silence of the Lambs",
    Year: "1991",
    Rated: "R",
    Runtime: "118 min",
    Genre: "Crime, Drama, Thriller",
    Director: "Jonathan Demme",
    Actors: "Jodie Foster, Anthony Hopkins",
    Plot: "A young FBI cadet must confide in an incarcerated killer.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_SX300.jpg"
  }
];
