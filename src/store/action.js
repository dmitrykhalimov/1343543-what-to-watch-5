export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_RENDERED: `INCREMENT_RENDERED`,
  RESET_RENDERED: `RESET_RENDERED`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const incrementRendered = (increment) => ({
  type: ActionType.INCREMENT_RENDERED,
  payload: increment,
});

export const resetRendered = () => ({
  type: ActionType.RESET_RENDERED,
});
