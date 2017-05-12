
import React from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  CheckBox, Icon
} from 'react-native-elements'

import Container from '../../common/Container'

export default class PushSetting extends React.Component {

  static navigationOptions({navigation, screenProps}) {
    return {
      title: '消息推送',
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
    this.state = {
      checked:false
    }
  }
  render() {
    return (
      <Container>
        <CheckBox
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0}}
          title='关闭推送'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked})}
        />
      </Container>
    )
  }
}