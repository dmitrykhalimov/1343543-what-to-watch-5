import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {title, genre, year, films} = props;
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
        <Route path="/films/:id" exact>
          <Film />
        </Route>
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
  films: PropTypes.array.isRequired,
};
