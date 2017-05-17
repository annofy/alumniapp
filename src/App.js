import React from 'react'
import {
  View,
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid
} from 'react-native'

import Welcome from './pages/Welcome'
let _navigator;

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
    this.goBack = this.NaviGoBack.bind(this)

    BackAndroid.addEventListener('harwareBackPress', this.goBack)

  }

  renderScene(route, navigator) {
    let Component = route.component
    _navigator = navigator
    return (
      <Component navigator={navigator} route={route}/>
    )
  }

  configScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  NaviGoBack(navigator) {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle='dark-content'
          translucent={false}
          backgroundColor='transparent'
          style={{height: 20, marginBottom: 20}}
        />
        <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Welcome,
            name: 'Welcome',
            statusBarHidden: true
          }}
        />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})