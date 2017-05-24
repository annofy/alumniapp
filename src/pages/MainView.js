import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

import NewsList from './NewsList'
import NearMap from './NearMap'
import Discuss from './Discuss'
import Home from './Home'
import Struct from './Struct'

import MenuIcon from '../../images/Menu_1.png'
import AcMenuIcon from '../../images/Menu_1da114_100.png'
import MapIcon from '../../images/Map_1.png'
import AcMapIcon from '../../images/Map Marker_1da114_100.png'
import ChatIcon from '../../images/Chat_1.png'
import AcChatIcon from '../../images/Chat_1da114_100.png'
import UserIcon from '../../images/Gender_1.png'
import AcUserIcon from '../../images/User_1da114_100.png'

export default class MainView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'struct',
      tabBarHeight: 50
    }
    this.hiddenBar = this.hiddenBar.bind(this)
    this.showBar = this.showBar.bind(this)
  }

  componentWillMount() {
  }

  hiddenBar() {
    this.setState({
      tabBarHeight: 0
    })
  }

  showBar() {
    this.setState({
      tabBarHeight: 50
    })
  }

  render() {
    return (
      <TabNavigator sceneStyle={{paddingBottom: this.state.tabBarHeight}}
                    tabBarStyle={{height: this.state.tabBarHeight, overflow: 'hidden'}}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'newsList'}
          title="新闻"
          selectedTitleStyle={styles.selectText}
          renderIcon={() => <Image style={ styles.icon} source={MenuIcon}/>}
          renderSelectedIcon={() => <Image style={ styles.icon} source={AcMenuIcon}/>}
          onPress={() => this.setState({selectedTab: 'newsList'})}>
          <NewsList {...this.props} screenProps={{hiddenBar: this.hiddenBar, showBar: this.showBar}}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'nearMap'}
          title="校友"
          selectedTitleStyle={styles.selectText}
          renderIcon={() => <Image style={ styles.icon} source={MapIcon}/>}
          renderSelectedIcon={() => <Image style={ styles.icon} source={AcMapIcon}/>}
          onPress={() => this.setState({selectedTab: 'nearMap'})}>
          <NearMap {...this.props} screenProps={{hiddenBar: this.hiddenBar, showBar: this.showBar}}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'discuss'}
          title="交流"
          selectedTitleStyle={styles.selectText}
          renderIcon={() => <Image style={ styles.icon} source={ChatIcon}/>}
          renderSelectedIcon={() => <Image style={ styles.icon} source={AcChatIcon}/>}
          onPress={() => this.setState({selectedTab: 'discuss'})}>
          <Discuss {...this.props} screenProps={{hiddenBar: this.hiddenBar, showBar: this.showBar}}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="个人中心"
          selectedTitleStyle={styles.selectText}
          renderIcon={() => <Image style={ styles.icon} source={UserIcon}/>}
          renderSelectedIcon={() => <Image style={ styles.icon} source={AcUserIcon}/>}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home {...this.props} screenProps={{hiddenBar: this.hiddenBar, showBar: this.showBar}}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'struct'}
          title="项目结构"
          selectedTitleStyle={styles.selectText}
          renderIcon={() => <Image style={ styles.icon} source={UserIcon}/>}
          renderSelectedIcon={() => <Image style={ styles.icon} source={AcUserIcon}/>}
          onPress={() => this.setState({selectedTab: 'struct'})}>
          <Struct {...this.props} screenProps={{hiddenBar: this.hiddenBar, showBar: this.showBar}}/>
        </TabNavigator.Item>

      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  selectText: {
    color: '#1DA114'
  }
})