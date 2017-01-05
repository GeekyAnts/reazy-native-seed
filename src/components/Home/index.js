import React, { Component } from 'react';
import { View, H1 } from 'native-base';

class Home extends Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8FCFB8'}}>
        <H1>
          Reazy seed
        </H1>
      </View>
    );
  }
}

export default Home;
