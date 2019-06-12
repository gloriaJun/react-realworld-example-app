import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '@/container/Home/Home';
import SignIn from '@/container/signIn/SignIn';
import SignUp from '@/container/signUp/SignUp';
import Profile from '@/container/profile/Profile';
import Article from '@/container/article/Article';
import Editor from '@/container/editor/Editor';
import Settings from '@/container/settings/Settings';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path={['/editor', '/editor/:slug']} component={Editor} />
        <Route exact path="/article/:slug" component={Article} />
        <Route
          exact
          path={['/profile/:username', '/profile/:username/favorites']}
          component={Profile}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
