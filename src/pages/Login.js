import React from 'react'
import { View, Text} from 'react-native'

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      result: {}
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <View>
        <Text>登录</Text>
      </View>
    )
  }
}