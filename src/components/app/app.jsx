import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {validFilm, validReview} from "../../utils/props";

const App = (props) => {
  const {title, genre, year, films, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageMain
            title = {title}
            genre = {genre}
            year = {year}
            films = {films}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList
            films = {films}
          />
        </Route>
        <Route exact
          path="/films/:id"
          render={({history}) => (
            <Film
              film = {films[0]}
              review = {reviews[0]}
              onPlayClick = {(id) => {
                history.push(`/player/${id}`); // неясно как связать этот {id} с Player - в который передается в любом случае films[0]
              }}
            />
          )}
        />
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact>
          <Player
            video = {films[0].video} // по ДЗ нужно добавить по одному произвольному моку в каждый раздел
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(validFilm).isRequired,
  reviews: PropTypes.arrayOf(validReview).isRequired
};
