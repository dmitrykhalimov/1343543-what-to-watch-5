import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {AppPath} from "../../const";
import PrivateRoute from "../private-route/private-routes";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {title, genre, year} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppPath.index}>
          <PageMain
            title = {title}
            genre = {genre}
            year = {year}
          />
        </Route>
        <Route exact path={AppPath.login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppPath.mylist}
          render={() => <MyList/>}
        />
        <Route exact
          path={AppPath.film}
          render={({history}) => (
            <Film
              onPlayClick = {(id) => {
                history.push(`${AppPath.player}/${id}`);
              }}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppPath.review}
          render={() => (
            <AddReview
              onFormSubmit = {(textComment, givenRating) => {
                // eslint-disable-next-line no-console
                console.log(`Мой расчудесный комментарий`);
                // eslint-disable-next-line no-console
                console.log(textComment);
                // eslint-disable-next-line no-console
                console.log(givenRating);
              }}
            />)}
        />
        <Route path={AppPath.playerFull} exact>
          <Player/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default App;

