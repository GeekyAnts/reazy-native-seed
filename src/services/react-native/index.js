import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';
import Routes from '../../components/Routes';

export default function() {
  return function() {
    const app = this;
    const services = app.getAllServices();

    class Root extends Component {

      render() {
        return (
          <Provider {...services} app={app}>
            <Routes />
          </Provider>
        );
      }
    }

    AppRegistry.registerComponent('reazyRN', () => Root);
    return Root;
  }

}
