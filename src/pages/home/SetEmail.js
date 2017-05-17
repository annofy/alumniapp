import React from 'react'
import {View, Text, ScrollView, ToastAndroid, TouchableHighlight} from 'react-native'
import {Icon} from 'react-native-elements'
import {ItemInput} from '../../common/ItemInput'
import Config from 'react-native-config'

export default class SetEmail extends React.Component {

  static navigationOptions({navigation, screenProps}) {
    return {
      title: '绑定个人邮箱',
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
          navigation.goBack()
          screenProps.showBar()
        }}/>,
      headerRight: <TouchableHighlight underlayColor="transparent" style={{paddingRight: 10}} onPress={ () => {
        fetch(`${Config.API_URL}/home/setmail`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...navigation.state.params
          })
        })
          .then(response => response.json())
          .then(res => {
            if (res.success) {
              ToastAndroid.show('保存信息成功', ToastAndroid.SHORT)
              navigation.goBack()
            } else {
              ToastAndroid.show('保存邮箱失败:' + res.reason, ToastAndroid.SHORT)
            }
          })
      }}>
        <Text>保存</Text>
      </TouchableHighlight>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      authCode: ''
    }
  }

  componentWillMount() {
    fetch(`${Config.API_URL}/home/info/${this.props.navigation.state.params.id}`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({
            email: res.data.email,
            authCode: res.data.authCode
          })
        }
      })
  }

  render() {
    const {setParams} = this.props.navigation
    return (
      <View style={{flex: 1, backgroundColor: '#fff', marginTop: 10}}>
        <Text
          style={{color: '#ccc', fontSize: 12, paddingLeft: 10, marginTop: 10, marginBottom: 10}}>设置邮箱方便本站发送邮件信息</Text>
        <ScrollView>
          <ItemInput label="邮箱地址" value={this.state.email}
                     onChangeText={text => setParams({email: text}) }/>
          <ItemInput label="邮箱授权码" value={this.state.authCode}
                     onChangeText={text => setParams({authCode: text})}/>
        </ScrollView>
      </View>
    )
  }
}