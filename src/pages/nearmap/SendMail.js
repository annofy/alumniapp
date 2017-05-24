import React from 'react'
import {View, ScrollView, TouchableHighlight, Text, ToastAndroid} from 'react-native'
import {Icon} from 'react-native-elements'
import {ItemInput, ItemTextArea} from '../../common/ItemInput'
import RightBtn from '../../common/RightBtn'
import Config from 'react-native-config'

export default class SendMail extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => {
    const {params} = navigation.state;
    return ({
      title: '发送信息',
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
        }}/>,
      headerRight: <RightBtn label="发送" onPress={() => {
        console.log('params', params)
        fetch(`${Config.API_URL}/nears/send`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            address: params.address,
            content: params.content,
            name: params.address.split('@')[0]
          })
        })
          .then(res => {
            ToastAndroid.show('发送成功', ToastAndroid.SHORT)
            navigation.goBack()
          })
          .catch(err => {
            console.log(err)
          })
      }}/>
    })
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {setParams} = this.props.navigation,
      {params} = this.props.navigation.state;
    console.log('params', params)
    return (
      <View style={{backgroundColor: '#fff', flex: 1, marginTop: 4}}>
        <ItemInput label="邮箱" value={params.address} onChangeText={txt => {
          setParams({
            address: txt
          })
        }}/>
        <ItemTextArea label="内容" onChangeText={txt => {
          setParams({
            content: txt
          })
        }}/>
      </View>
    )
  }
}