import React from 'react'
import {Text} from 'react-native'

export default class Tips extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text
        style={{color: '#ccc', fontSize: 12, paddingLeft: 10, marginTop: 10, marginBottom: 10}}>{this.props.tips}</Text>
    )
  }
}