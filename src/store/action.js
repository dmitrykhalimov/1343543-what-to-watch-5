export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_FILMS: `FILTER_FILMS`,
  INCREMENT_RENDERED: `INCREMENT_RENDERED`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  filterFilms: (filteredFilms) => ({
    type: ActionType.FILTER_FILMS,
    payload: filteredFilms,
  }),
  incrementRendered: (increment) => ({
    type: ActionType.INCREMENT_RENDERED,
    payload: increment,
  })
};
