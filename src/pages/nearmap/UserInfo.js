import React from 'react'
import {View, Text} from 'react-native'
import {Card, Button, Icon} from 'react-native-elements'

export default class UserInfo extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => {
    return ({
      title: '关注好友',
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
        }}/>
    })
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {state, navigate} = this.props.navigation,
      params = state.params;
    return (
      <Card
        title={ params.name }
        image={{uri: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'}}>
        <Text style={{marginBottom: 10}}>
          还没有说点什么，提醒他发布。
        </Text>
        <Text>
          {params.name }上次登录时间: { params.lastLogin }
        </Text>
        <Button
          icon={{name: 'email'}}
          backgroundColor='#03A9F4'
          fontFamily='Lato'
          onPress={() => {
            navigate('SendMail', { address: params.email })
          }}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10, marginBottom: 0}}
          title='给他发邮件'/>
        <Button
          icon={{name: 'eye', type: 'font-awesome'}}
          backgroundColor='#ED602B'
          fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10, marginBottom: 0}}
          title={'关注' + params.name}/>
      </Card>
    )
  }
}