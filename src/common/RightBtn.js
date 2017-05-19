import React from 'react'
import {TouchableHighlight, Text} from 'react-native'

export default class RightBtn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" style={{paddingRight: 10}} onPress={this.props.onPress}>
        <Text>{this.props.label}</Text>
      </TouchableHighlight>
    )
  }
}