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

export const Path = {
  index: `/`,
  login: `/login`,
  mylist: `/mylist`,
  film: `/films/:id`,
  player: `/player/:id`,
  review: `/films/:id/review`
};

export const ALL_GENRES = `All genres`;
