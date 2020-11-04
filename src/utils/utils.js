export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const findByKey = (items, id) => {
  const foundItem = items.find((item) => item.id === Number(id));
  return foundItem;
};
