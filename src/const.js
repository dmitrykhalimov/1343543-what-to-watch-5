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
  films: `/films`,
  player: `/player`,
  playerFull: `/player/:id`,
  review: `/films/:id/review`,
  reviewShort: `/review`,
  notFound: `/not-found`,
  error: `/error-page`
};

export const APIPath = {
  login: `/login`,
  mylist: `/mylist`,
  films: `/films`,
  favorite: `/favorite`,
  promo: `/films/promo`,
  comments: `/comments`,
};

export const ErrorMessage = {
  ADD_COMMENT: `Ошибка отправки комментария на сервер`,
  BAD_REQUEST: `Ошибка 400: отправлены некорректные данные`,
  NOT_FOUND: `Ошибка 404, сервер не найден`,
  OTHER: `Внутренняя ошибка сервера`,

  FETCH_FILMS_LIST_FAIL: `Ошибка загрузки списка фильмов`,
  FETCH_SINGLE_FILM_FAIL: `Ошибка загрука фильма`,
  FETCH_PROMO_FAIL: `Ошибка загрука фильма-промо`,
  FETCH_COMMENTS_FAIL: `Ошибка загрузки комментариев`,
  FETCH_FAVORITES_FAIL: `Ошибка загрузки списка избранных фильмов`,
  ADD_FAVORITES_FAIL: `Для добавления в избранное нужно авторизоваться`,

  WRONG_EMAIL: `Некорректно введен email`,
  WRONG_PASSWORD: `Не указан пароль`,
};

export const ALL_GENRES = `All genres`;
export const QUANTITY_FILMS_RENDER = 8;

export const ACTIVE_FILM_INITIAL_STATE = {
  description: [],
  director: ``,
  genre: ``,
  id: 0,
  title: ``,
  poster: ``,
  preview: ``,
  background: ``,
  backgroundColor: ``,
  rankNumber: 0,
  isFavorite: false,
  rankText: ``,
  year: 0,
  video: ``,
  videoMain: ``,
  duration: 0,
  cast: ``,
  votes: 0,
};

export const TEST_MOCK_FILM = {
  description: [],
  director: ``,
  genre: ``,
  id: 1,
  title: ``,
  poster: ``,
  preview: ``,
  backgroundColor: ``,
  background: ``,
  rankNumber: 1,
  isFavorite: true,
  rankText: ``,
  year: 1,
  video: ``,
  videoMain: ``,
  duration: 1,
  cast: ``,
  votes: 1,
};

export const TEST_MOCK_STORE = {
  user: {
    id: 26,
    email: `princess-peach@anothercastle.com`,
    name: `Princess`,
    authorizationStatus: `AUTH`,
    avatarUrl: `https://i.kym-cdn.com/photos/images/newsfeed/000/607/429/84b.jpg`,
  },
  filter: {
    activeGenre: `Adventure`
  },
  data: {
    authorizationStatus: `TRUE`,
    films: [TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM],
    filteredFilms: [TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM],
    genresList: [`Comedy`, ``, ``, ``, ``, ``],
    activeFilm: TEST_MOCK_FILM,
    filmPromo: TEST_MOCK_FILM,
    favorites: [TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM],
  },
  showMore: {
    rendered: 12
  }
};

export const TEST_MOCK_USER = {
  id: 26,
  email: `princess-peach@anothercastle.com`,
  name: `Princess`,
  authorizationStatus: `AUTH`,
  avatarUrl: `https://i.kym-cdn.com/photos/images/newsfeed/000/607/429/84b.jpg`,
};

export const TEST_MOCK_COMMENT = {
  id: 32,
  user: {
    id: 52,
    name: ``,
  },
  rating: 1,
  comment: ``,
  date: ``,
  // date: `2020-10-06T19:03:49.657Z`,
};

export const TEST_MOCKS = {
  id: 1,
  noop: () => {},
  film: TEST_MOCK_FILM,
  films: [TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM, TEST_MOCK_FILM],
  genres: [`All genres`, ``, ``, ``, ``, ``],
  activeGenre: `All genres`,
  comment: TEST_MOCK_COMMENT,
  match: {
    params: {
      id: `1`
    }
  },
  userData: {
    id: 1,
    email: ``,
    name: ``,
    authorizationStatus: ``,
    avatarUrl: ``,
  },


  boolTrue: true,
  boolFalse: false,
  //  descriptionOneElement: ["A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in Staten Island."]
  errorMessage: `Ошибка: перелетные гагары унесли оптоволокно в южные страны`,

  title: TEST_MOCK_FILM.title,
  background: TEST_MOCK_FILM.background,
  poster: TEST_MOCK_FILM.poster,

  comments: [TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT, TEST_MOCK_COMMENT],
  noData: [],
  year: TEST_MOCK_FILM.year,
  genre: TEST_MOCK_FILM.genre,
  incrementRenderedFilms: 2,
  maxQuantity: 8,
  rendered: 12,
  avatarUrl: TEST_MOCK_STORE.user.avatarUrl,

  filmsQuantity: 5,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  preview: `https://thenewswheel.com/wp-content/uploads/2014/08/Interstate-60-review-BMW-convertible-James-Marsden-8-ball.jpg`,
  tab: {
    OVERVIEW: `OVERVIEW`,
    DETAILS: `DETAILS`,
    REVIEWS: `REVIEWS`,
  },
  authorizationStatusTrue: `AUTH`,
  authorizationStatusFalse: `NO_AUTH`,
  path: `/films/1`,


};
