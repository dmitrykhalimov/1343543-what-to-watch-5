import {getRandomInteger} from "../utils/common";

const FILMS_QUANTITY = 8;
const CommentsQuantity = {
  MIN: 1, // в целях отладки
  MAX: 5
};

// https://www.commments.com/

const COMMENTS = [
  `This is gorgeous work mate`,
  `Let me take a nap... great boldness, anyway.`,
  `It's gorgeous not just magnificent!`,
  `Truly beastly animation!`,
  `Fresh work you have here.`,
  `I think I'm crying. It's that radiant.`,
  `Contrast.`,
  `Blur, background, experience, style – sleek mate`,
  `Mission accomplished. It's sleek.`,
  `This shot has navigated right into my heart.`,
  `This is fun work!`,
  `I want to learn this kind of colours! Teach me.`,
  `Found myself staring at it for minutes.`,
  `Graceful work you have here.`,
  `My 33 year old son rates this shapes very revolutionary =)`,
  `I love the use of background and typography!`,
  `Shade, type, experience, idea – delightful.`,
];

// генераторы - это круто!
const NAMES = [
  `Blanche Solomon`,
  `Leslie Barron`,
  `Aronas Webb`,
  `Layan Moore`,
  `Kaydan Alvarez`,
  `Lilliana Mann`,
  `Pauline Kouma`,
  `Rosemarie Simmonds`,
  `Elias Lynch`,
  `Verity Monroe`,
  `Zain O'Connor`,
  `Martin Bourne`,
  `Khalil Plummer`,
  `Angelo Betts`,
  `Raja Palmer`,
  `Charlton Mcguire`,
  `Caspar Cleveland`,
  `Honey Benton`,
  `Paula Whittington`,
  `Yunus Woolley`,
  `Sama Lancaster`,
  `Layton Phan`,
  `Akash Bush`,
  `Gino Melton`
];


const makeComments = (quantity, filmId) => {
  return new Array(quantity).map(() => {
    return {
      commentId: `${filmId}-c${i}`,
      comment: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
      rank: Number(`${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`),
      name: NAMES[getRandomInteger(0, NAMES.length - 1)],
      date: `December 20, 2016`
    };
  });
};

const makeMocks = () => {
  return new Array(FILMS_QUANTITY).map((item, index) => {
    return {
      filmId: index,
      reviews: makeComments(getRandomInteger(CommentsQuantity.MIN, CommentsQuantity.MAX), index)
    };
  });
};

export default makeMocks();
