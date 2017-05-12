import React from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  Button,
  Icon
} from 'react-native-elements'

import ListInfo from '../../common/ListInfo'
import ItemInfo from '../../common/ListInfo'
import Container from '../../common/Container'
export default class PhoneBind extends React.Component {

  static navigationOptions({navigation, screenProps}) {
    return {
      title: '电话绑定',
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
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <View style={{height: 50, flexDirection: 'row', padding: 15, justifyContent: 'center'}}>
          <Text style={{ flex: 1, textAlign: 'left'}}>电话号码</Text>
          <Text style={{ flex: 1, textAlign: 'right', color: '#000'}}>18372627060</Text>
        </View>
        <Button title="添加手机" buttonStyle={{ backgroundColor: '#51A938', height: 36, marginBottom: 20}}/>
      </Container>
    )
  }
}