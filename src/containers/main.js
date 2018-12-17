import React, { Component } from 'react';
import '../scss/main.scss';
/* Aux import is an higher order component used for wrapping.*/
import Aux from '../hoc/aux'
import Headphone from './headphone'
/* FontAwsome Library for Back arrow*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowLeft)

/* Main Class which loads in the Headphone Container*/
class Main extends Component {
  render() {
    return (
      <Aux>
          <Headphone/>
      </Aux>
    );
  }
}

export default Main;