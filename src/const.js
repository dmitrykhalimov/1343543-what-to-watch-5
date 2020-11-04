export const ratingRanks = [
  {
    name: `Bad`,
    min: 0,
    max: 2,
  },
  {
    name: `Normal`,
    min: 2,
    max: 5,
  },
  {
    name: `Good`,
    min: 5,
    max: 8,
  },
  {
    name: `Very good`,
    min: 8,
    max: 10,
  },
  {
    name: `Awesome`,
    min: 10,
    max: Infinity,
  },
];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppPath = {
  index: `/`,
  login: `/login`,
  mylist: `/mylist`,
  film: `/films/:id`,
  player: `/player`,
  playerFull: `/player/:id`,
  review: `/films/:id/review`
};

export const APIPath = {
  login: `/login`,
  mylist: `/mylist`,
  films: `/films`,
  player: `/player/:id`,
  review: `/films/:id/review`
};

export const ALL_GENRES = `All genres`;
export const QUANTITY_FILMS_RENDER = 8;

export const ACTIVE_FILM_INITIAL_STATE = {
  description: [`Test`],
  director: ``,
  genre: ``,
  id: 0,
  title: ``,
  poster: ``,
  preview: ``,
  background: ``,
  backgroundColor: `#E1DFDE`,
  rankNumber: 0,
  isFavorite: false,
  rankText: `Normal`,
  year: 2011,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoMain: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  duration: 112,
  cast: `Tilda Swinton, John C. Reilly, Ezra Miller`,
  votes: 123240,
};
