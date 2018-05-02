import React, { Component, Fragment } from 'react';
import Topics from '../aside/Topics';
import Header from '../Header';
import Lists from './ListItem';
import Subscribe from './Subscribe'
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'


class MainLayout extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <Topics />
            <Lists />
            <Subscribe />
          </div>
        </div>
      </Fragment>
    );
  }

}

export default MainLayout;
