import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import { observer, inject } from 'mobx-react/native';

@inject("view.app", "i18n", "routerActions", "app")
@observer
class Home extends Component {

  increment() {
    this.props['view.app'].count ++;
  }

  decrement() {
    this.props['view.app'].count --;
  }

  logout() {
    const { app, routerActions } = this.props;
    app.authFacebook.logout()//.then((response) => {
      // console.log('response', response);
      console.log('app', app);
      routerActions.pop();
    // })
  }

  render() {
    const { i18n, routerActions, app } = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8FCFB8'}}>
        <Text>
          {`${i18n.t('Welcome')}, ${app.auth.user().name}`}
        </Text>
        <Text>
          {i18n.t('Count')}: {this.props['view.app'].count}
        </Text>
        <View style={{ alignSelf: 'center', flexDirection: 'row', padding: 10 }}>
          <Button rounded onPress={() => this.increment()}>  +  </Button>
          <Button rounded onPress={() => this.decrement()}>  -  </Button>
        </View>
        <Button style={{ alignSelf: 'center' }} onPress={() => this.logout()}>{i18n.t('Logout')}</Button>
      </View>
    );
  }
}

export default Home;
