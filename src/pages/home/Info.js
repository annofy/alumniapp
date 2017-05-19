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
import Config from 'react-native-config'

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
      info: {
        graduation: ''
      }
    }
  }


  componentWillMount() {
    fetch(`${Config.API_URL}/home/info/${this.props.navigation.state.params.id}`)
      .then(res => res.json())
      .then(res => {
        if(res.success) {
          this.setState({
            info: res.data
          }, () => {
            console.log('state', this.state.info)
            _actions = NavigationActions.navigate({
              routeName: 'InfoEdit',
              params: { ...this.state.info},
            })
          })
        }
      })
  }

  render() {
    return (
      <ListInfo>
        <ItemInfo title="姓名" rightTitle={this.state.info.name}/>
        <ItemInfo title="手机号" rightTitle={this.state.info.phone}/>
        <ItemInfo title="所在省" rightTitle={this.state.info.locationProvince}/>
        <ItemInfo title="所在市" rightTitle={this.state.info.locationCity}/>
        <ItemInfo title="行业" rightTitle={this.state.info.industry}/>
        <ItemInfo title="学历信息" rightTitle={this.state.info.graduation.desc}/>
      </ListInfo>
    )
  }
}