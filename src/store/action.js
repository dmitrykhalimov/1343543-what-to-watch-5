export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_FILMS: `FILTER_FILMS`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  filterFilms: (filteredFilms) => ({
    type: ActionType.CHANGE_GENRE,
    payload: filteredFilms,
  })
};
