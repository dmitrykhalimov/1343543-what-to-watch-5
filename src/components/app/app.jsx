import React from "react";
import PageMain from "../page-main/page-main";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import NotFound from "../not-found/not-found";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import ErrorPage from "../error-page/error-page";
import {AppPath} from "../../const";
import PrivateRoute from "../private-route/private-routes";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppPath.index}>
          <PageMain />
        </Route>
        <Route exact path={AppPath.login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppPath.mylist}
          render={() => <MyList />}
        />
        <Route exact path={AppPath.film}>
          <Film/>
        </Route>
        <Route exact path={AppPath.notFound}>
          <NotFound/>
        </Route>
        <Route exact path={AppPath.error}>
          <ErrorPage></ErrorPage>
        </Route>
        <PrivateRoute
          exact
          path={AppPath.review}
          render={() => <AddReview />}
        />
        <Route path={AppPath.playerFull} exact>
          <Player />
        </Route>
        <Route exact path={`*`}>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

