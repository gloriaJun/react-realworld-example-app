import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from 'container/app/Routes';

export default () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};
