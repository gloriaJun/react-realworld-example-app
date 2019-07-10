import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from 'container/home/Home';
import SignIn from 'container/signIn/SignIn';
import SignUp from 'container/signUp/SignUp';
import Profile from 'container/profile/Profile';
import Article from 'container/article/Article';
import Editor from 'container/editor/Editor';
import Setting from 'container/setting/Setting';

import ROUTE from 'constants/routes';

export default () => {
  return (
    <Switch>
      <Route exact path={ROUTE.INDEX} component={Home} />
      <Route path={ROUTE.SIGN_IN} component={SignIn} />
      <Route path={ROUTE.SIGN_UP} component={SignUp} />
      <Route path={ROUTE.SETTING} component={Setting} />
      <Route
        path={[ROUTE.EDITOR, `${ROUTE.EDITOR}/:slug`]}
        component={Editor}
      />
      <Route path={`${ROUTE.ARTICLE}/:slug`} component={Article} />
      <Route
        path={[
          `${ROUTE.PROFILE}/:username`,
          `${ROUTE.PROFILE}/:username/favorites`,
        ]}
        component={Profile}
      />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
