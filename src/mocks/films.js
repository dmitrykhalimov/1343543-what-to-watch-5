import {getRandomInteger} from "../utils/common";
import {translateRatingToText} from "../utils/common";

// const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const TITLES = [
  `Fantastic Beasts: The Crimes of Grindewald`,
  `Bohemian Rhapsody`,
  `Mackbeth`,
  `Aviator`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Pulp Fiction`,
];

const GENRES = [
  `Fantasy`,
  `Biography`,
  `Fantasy`,
  `Drama`,
  `Fantasy`,
  `Adventure`,
  `Comedy`,
  `Crime`
];

const DIRECTORS = [
  `David Yates`,
  `Bryan Singer`,
  `Justin Kurzel`,
  `Martin Scorsese`,
  `Jemaine Clement`,
  `Alejandro González Iñárritu`,
  `Peter Howitt`,
  `‎Quentin Tarantino‎`
];

// вероятнее всего должен быть объект, но для упрощения сделал массив
const PREVIEWS = [
  `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `bohemian-rhapsody.jpg`,
  `macbeth.jpg`,
  `aviator.jpg`,
  `what-we-do-in-the-shadows.jpg`,
  `revenant.jpg`,
  `johnny-english.jpg`,
  `pulp-fiction.jpg`
];

// каждый состав вероятно должен быть отдельным массивом, но для упрощения сделал одной строкой
const CAST = [
  `Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Colin Farrell`,
  `Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, Mike Myers`,
  `Michael Fassbender, Marion Cotillard, Paddy Considine, Sean Harris, Jack Reynor, Elizabeth Debicki, David Thewlis`,
  `Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Colin Farrell`,
  `Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, Mike Myers`,
  `Michael Fassbender, Marion Cotillard, Paddy Considine, Sean Harris, Jack Reynor, Elizabeth Debicki, David Thewlis`,
  `Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, Colin Farrell`,
  `Rami Malek as Mercury, with Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, Allen Leech, Mike Myers`,
];

const DESCRIPTION = [
  `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
];

const Votes = {
  MIN: 10,
  MAX: 1000,
};

const Years = {
  MIN: 2010,
  MAX: 2020
};

const Duration = {
  MIN: 80,
  MAX: 230,
};

const makeMocks = () => {
  return TITLES.map((item, index) => {
    const rank = Number(`${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`);
    return {
      id: index,
      title: TITLES[index],
      preview: PREVIEWS[index],
      poster: `https://loremflickr.com/218/327`,
      background: `https://loremflickr.com/1300/552`,
      description: DESCRIPTION,
      genre: GENRES[index],
      rankNumber: rank,
      rankText: translateRatingToText(rank),
      year: getRandomInteger(Years.MIN, Years.MAX),
      votes: getRandomInteger(Votes.MIN, Votes.MAX),
      director: DIRECTORS[index],
      cast: CAST[index],
      duration: getRandomInteger(Duration.MIN, Duration.MAX),
      video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    };
  });
};

export default makeMocks();
