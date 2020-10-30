import {combineReducers} from "redux";
import {filmsData} from "./films-data/films-data";
import {filters} from "./filters/filters";
import {showMore} from "./show-more/show-more";

export const NameSpace = {
  DATA: `data`,
  FILTER: `filter`,
  SHOW_MORE: `showMore`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.FILTER]: filters,
  [NameSpace.SHOW_MORE]: showMore,
});
