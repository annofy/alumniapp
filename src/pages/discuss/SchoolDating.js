import React from 'react'
import {
  TabNavigator
} from 'react-navigation'
import { Icon } from 'react-native-elements'
import Girl from './Girl'
import Boy from './Boy'


// 校园详情
const Tabs = TabNavigator({
  Boy: {
    screen: Boy
  },
  Girl: {
    screen: Girl
  }
}, {
  tabBarPosition: 'top',
  lazy: true,
  animationEnabled: true
})
Tabs.navigationOptions = (navigation, screenProps) => {
  return ({
    title: '校友桃色新闻',
    headerStyle: {
      height: 45
    },
    headerTitleStyle: {
      color: '#323232',
      fontSize: 16,
      fontWeight: 'normal'
    },
    headerLeft: <Icon
      name='chevron-left'
      type='ionicons'
      color='#333'
      underlayColor="#ccc"
      containerStyle={{flex: 1, paddingRight: 10}}
      onPress={() => {
        navigation.screenProps.showBar()
        navigation.navigation.goBack()
      }} />
  })
}

export default Tabs
