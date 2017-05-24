import React from 'react'
import {
  Text, View, Image, Dimensions,  // 设备像素
  InteractionManager, // 交互管理器
  StatusBar, AsyncStorage
} from 'react-native'

import MainView from './MainView'
import Login from './Login'

let {width, height} = Dimensions.get('window')

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }

  // 组件挂载后
  componentDidMount() {
    const {navigator} = this.props
    this.timer = setTimeout(() => {
      AsyncStorage.getItem('userId')
        .then(userId => {
          if (!userId) {
            InteractionManager.runAfterInteractions(() => {
              navigator.resetTo({
                name: 'Login',
                component: Login
              })
            })
          } else {
            InteractionManager.runAfterInteractions(() => {
              navigator.resetTo({
                name: 'Main',
                component: MainView
              })
            })
          }
        }).catch(() => {

      })
    }, 1000)
  }

  // 组件下载后清除定时器
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={this.props.route.statusBarHidden}/>
        <Image
          style={{flex: 1, width: width, height: height}}
          source={require('../../images/ic_welcome.jpg')}
        />
      </View>
    )
  }
}
