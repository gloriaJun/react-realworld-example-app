import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from 'container/home/Home';
import SignIn from 'container/signIn/SignIn';
import SignUp from 'container/signUp/SignUp';
import Profile from 'container/profile/Profile';
import Article from 'container/article/Article';
import Editor from 'container/editor/Editor';
import Setting from 'container/setting/Setting';

import ROUTE from 'constants/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTE.INDEX} component={Home} />
        <Route exact path={ROUTE.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTE.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTE.SETTING} component={Setting} />
        <Route
          exact
          path={[ROUTE.EDITOR, `${ROUTE.EDITOR}/:slug`]}
          component={Editor}
        />
        <Route exact path={`${ROUTE.ARTICLE}/:slug`} component={Article} />
        <Route
          exact
          path={[
            `${ROUTE.PROFILE}/:username`,
            `${ROUTE.PROFILE}/:username/favorites`,
          ]}
          component={Profile}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
