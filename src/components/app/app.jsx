import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import {validReview} from "../../utils/props";
import {Path} from "../../const";
import PrivateRoute from "../private-route/private-routes";

const App = (props) => {
  const {title, genre, year} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.index}>
          <PageMain
            title = {title}
            genre = {genre}
            year = {year}
          />
        </Route>
        <Route exact path={Path.login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={Path.mylist}
          render={() => <MyList/>}
        />
        {/* <Route exact path={Path.mylist}>
          <MyList/>
        </Route> */}
        <Route exact
          path={Path.film}
          render={({history}) => (
            <Film
              onPlayClick = {(id) => {
                history.push(`/player/${id}`);
              }}
            />
          )}
        />
        <Route path={Path.review} exact>
          <AddReview
            onFormSubmit = {(textComment, givenRating) => {
              // eslint-disable-next-line no-console
              console.log(`Мой расчудесный комментарий`);
              // eslint-disable-next-line no-console
              console.log(textComment);
              // eslint-disable-next-line no-console
              console.log(givenRating);
            }}
          />
        </Route>
        <Route path={Path.player} exact>
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
  reviews: PropTypes.arrayOf(validReview).isRequired
};

export default App;

