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
  const {title, genre, year} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageMain
            title = {title}
            genre = {genre}
            year = {year}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        {/* TODO: понятно, что в будущем потребуется что-то передать, но пока я решил не заморачиваться и передать через comopnent */}
        <Route path="/films/:id" exact component={Film} />
        <Route path="/films/:id/review" exact component={AddReview} />
        <Route path="/player/:id" exact component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
