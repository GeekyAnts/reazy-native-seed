import React, {
  Component,
} from 'react';
import {
  Scene,
  Router,
  Actions,
  ActionConst,
} from 'react-native-router-flux';

import Home from './Home';
import Login from './Login';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar hideTabBar>
          <Scene key="login" component={Login} direction="vertical" />
          <Scene key="home" component={Home} />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
