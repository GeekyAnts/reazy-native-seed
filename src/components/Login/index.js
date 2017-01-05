import React, { Component } from 'react';
import { View, Text, Button, InputGroup, Input } from 'native-base';
import { observer, inject } from 'mobx-react/native';

@inject("view.app", "i18n", "routerActions", "app")
@observer
class Login extends Component {

  increment() {
    this.props['view.app'].count ++;
  }

  decrement() {
    this.props['view.app'].count --;
  }

  login() {
    const { app, routerActions } = this.props;
    app.authFacebook.login(['public_profile', 'email'], 'name, gender, age_range, first_name, last_name, email').then((response) => {
      console.log('response', response);
      // app.auth.setUser(response.data.user);
      // app.auth.setToken(response.data.jwtAccessToken);
      // app.http.setDefaultHeaders({
      //   Authorization: response.data.jwtAccessToken
      // });
      console.log('app', app);
      routerActions.home();
    })
  }

  render() {
    const { i18n, routerActions } = this.props;
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: '#8FCFB8' }}>
        <Text>
          {i18n.t('Count')}: {this.props['view.app'].count}
        </Text>
        <View style={{ alignSelf: 'center', margin: 30, height: 200, justifyContent: 'space-around' }}>
          <InputGroup borderType="rounded" style={{ backgroundColor: 'white', width: 320 }}>
            <Input placeholder={i18n.t('username')} />
          </InputGroup>
          <InputGroup borderType="rounded" style={{ backgroundColor: 'white', width: 320 }}>
            <Input placeholder={i18n.t('password')} />
          </InputGroup>

          <Button block onPress={() => this.login()}>{i18n.t('Login')}</Button>
        </View>
      </View>
    );
  }
}

export default Login;
