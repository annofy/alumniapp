import React from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import {
  ListItem,
  Icon
} from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

import ListInfo from '../../common/ListInfo'
import ItemInfo from '../../common/ItemInfo'

export default class Info extends React.Component {

  static _actions = null

  static navigationOptions({navigation, screenProps}) {
    const {state} = navigation
    const rightHeader = (<TouchableHighlight underlayColor='#ccc' style={{paddingRight: 10}} onPress={() => {
      return navigation.dispatch(_actions)
    }}>
      <Text>编辑</Text>
    </TouchableHighlight>)
    return {
      title: '个人信息',
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
          screenProps.showBar()
          navigation.goBack()
        }}/>,
      headerRight: rightHeader
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      info: {}
    }
  }


  componentWillMount() {
    this.setState({
      info: {
        name: 'zhenglongfan',
        phone: '18372627060',
        company: '青峰网络',
        location: '浙江杭州',
        industry: 'web前端开发',
        graduation: '13级计算机系'
      }
    }, () => {
      _actions = NavigationActions.navigate({
        routeName: 'InfoEdit',
        params: { ...this.state.info},
      })
    })

  }

  render() {
    return (
      <ListInfo>
        <ItemInfo title="姓名" rightTitle={this.state.info.name}/>
        <ItemInfo title="手机号" rightTitle={this.state.info.phone}/>
        <ItemInfo title="公司" rightTitle={this.state.info.company}/>
        <ItemInfo title="位置" rightTitle={this.state.info.location}/>
        <ItemInfo title="行业" rightTitle={this.state.info.industry}/>
        <ItemInfo title="学历信息" rightTitle={this.state.info.graduation}/>
      </ListInfo>
    )
  }
}