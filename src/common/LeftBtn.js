import React from 'react'
import {Icon} from 'react-native-elements'

export default class LeftBtn extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    <Icon
      name='chevron-left'
      type='ionicons'
      color='#333'
      underlayColor="#ccc"
      containerStyle={{flex: 1, paddingRight: 10}}
      onPress={() => {
        if(this.props)
        this.props.screenProps.showBar()
        this.props.navigation.goBack()
      }}/>
  }
}