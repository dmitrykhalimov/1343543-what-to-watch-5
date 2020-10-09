import {ratingRanks} from "../const.js";

const MINS_IN_HOUR = 60;

export const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const translateRatingToText = (rating) => {
  const result = ratingRanks
    .find((item) => {
      return rating >= item.min && rating < item.max;
    });
  return result.name;
};

export const translateMinutesToText = (duration) => {
  const hours = Math.floor(duration / MINS_IN_HOUR);
  const minutes = duration - hours * MINS_IN_HOUR;
  return `${hours}h ${minutes}m`;
};


// тиснул из предыдущего проекта, а вдруг пригодится?
export const getRandomBoolean = () => {
  return Math.random() >= 0.5;
};

export const getRandomFromElements = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};
