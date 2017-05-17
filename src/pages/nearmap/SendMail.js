import React from 'react'
import {View, ScrollView, TouchableHighlight, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import {ItemInput, ItemTextArea} from '../../common/ItemInput'

export default class SendMail extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => {
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
          screenProps.showBar()
          navigation.goBack()
        }}/>,
      headerRight: <TouchableHighlight>
        <Text>发送</Text>
      </TouchableHighlight>
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      from: {}
    }
  }

  render() {
    return (
      <View>
        <ItemInput label="邮箱" value="zhenglfsir@gmail.com"/>
        <ItemTextArea label="内容" value="" />
      </View>
    )
  }
}