import React, { Component } from 'react';
import { I18nManager } from 'react-native';
import { AppLoading, Font,loadAsync } from 'expo';
import Roboto from './node_modules/native-base/Fonts/Roboto.ttf';
        import Roboto_medium from './node_modules/native-base/Fonts/Roboto_medium.ttf';
        import Ionicons from'./node_modules/@expo/vector-icons/fonts/Ionicons.ttf';
//fire base

import * as firebase from 'firebase';

  
import Reducers from './pages/redux/reducers';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  bindActionCreators,
} from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Reducers);


     
import Route from './pages/stacknav';

export default class App extends React.Component {
  constructor() {
    super();
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
    // if (!firebase.apps.length) {
    //   firebase.initializeApp({ config });
    // }
  }
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        Roboto,
        Roboto_medium,
        Ionicons
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }



  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
