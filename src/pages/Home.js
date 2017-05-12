import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

import {
  ListItem,
  Grid,
  Row,
} from 'react-native-elements'

import {StackNavigator} from 'react-navigation'

import Info from './home/Info'
import InfoEdit from './home/InfoEdit'
import PassSetting from './home/PassSetting'
import PhoneBind from './home/PhoneBind'
import PushSetting from './home/PushSetting'
import MyDonate from './home/MyDonate'
import About from './home/About'

import ImageIcon from '../../images/icons8-puzzle.png'

import ListInfo from '../common/ListInfo'


class Home extends React.Component {

  static navigationOptions = {
    headerStyle: {height: 0, overflow: 'hidden'}
  }

  constructor(props) {
    super(props)
    this.state = {
      menus: [
        {
          name: '个人信息',
          icon: 'user-o',
          component: 'Info'
        },
        {
          name: '密码设置',
          icon: 'key',
          component: 'PassSetting'
        },
        {
          name: '电话绑定',
          icon: 'mobile',
          component: 'PhoneBind'
        },
        {
          name: '消息推送',
          icon: 'bell-o',
          component: 'PushSetting'
        },
        {
          name: '我的捐赠',
          icon: 'calendar-check-o',
          component: 'MyDonate'
        },
        {
          name: '关于',
          icon: 'comment-o',
          component: 'About'
        },
      ]
    }
  }


  render() {
    const {navigate} = this.props.navigation
    return (
      <Grid containerStyle={ styles.container}>
        <Row containerStyle={styles.header} size={1}>
          <View style={{flex: 1, justifyContent: 'center', padding: 8, borderRadius: 3}}>
            <Image style={{flex: 1}} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}/>
          </View>
          <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center'}}>
            <View style={styles.headerItem}>
              <Text>zhenglongfan</Text>
            </View>
            <View style={styles.headerItem}>
              <Text>浙江 杭州</Text>
            </View>
            <View style={styles.headerItem}>
              <Text>杭州青峰网络</Text>
            </View>
          </View>
        </Row>
        <Row size={4} containerStyle={styles.menus}>
          <ScrollView>
            <ListInfo>
              {
                this.state.menus.map((l, i) => (
                  <ListItem
                    roundAvatar
                    key={i}
                    leftIcon={{name: l.icon, size: 20, type: 'font-awesome'}}
                    title={l.name}
                    onPress={ () => {
                      this.props.screenProps.hiddenBar()
                      return navigate(l.component)
                    }}
                  />
                ))
              }
            </ListInfo>
          </ScrollView>
        </Row>
      </Grid>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3'
  },
  header: {
    backgroundColor: '#fff',
    marginTop: 10
  },
  menus: {
    marginTop: 20,
  },
  headerItem: {
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 12,
  }
})

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Info: {
    screen: Info,
  },
  InfoEdit: { screen: InfoEdit },
  PassSetting: { screen: PassSetting },
  PhoneBind: { screen: PhoneBind },
  PushSetting: { screen: PushSetting },
  MyDonate: { screen: MyDonate },
  About: { screen: About },
})