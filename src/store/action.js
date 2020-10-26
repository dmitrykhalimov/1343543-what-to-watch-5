export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_RENDERED: `INCREMENT_RENDERED`,
  RESET_RENDERED: `RESET_RENDERED`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  incrementRendered: (increment) => ({
    type: ActionType.INCREMENT_RENDERED,
    payload: increment,
  }),
  resetRendered: () => ({
    type: ActionType.RESET_RENDERED,
  })
};
