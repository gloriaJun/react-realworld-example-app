import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from 'container/app/Header';
import Routes from 'container/app/Routes';
import Footer from 'container/app/Footer';

const { TITLE } = process.env;

export default () => {
  return (
    <HashRouter>
      <Header title={TITLE} />
      <Routes />
      <Footer title={TITLE} />
    </HashRouter>
  );
};
