import { observable } from 'mobx';

class AppStore {
  @observable count = 0;
  @observable navigation = {
    index: 0,
    routes: [{key: 'home'}],
  }

  resetTimer() {
    this.count = 0;
  }
}

export default AppStore;
