import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  ListItem
} from 'react-native-elements'

const styles = StyleSheet.create({
  title: {
    color: '#666'
  },
  rightTitle: {
    color: '#323232'
  }
})


export default class ItemInfo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ListItem onPress={ this.props.onPress } containerStyle={this.props.containerStyle} hideChevron={true} titleStyle={this.props.titleStyle} subtitle={this.props.subtitle} rightTitleStyle={this.props.rightTitleStyle} title={this.props.title} rightTitle={this.props.rightTitle}/>
    )
  }
}

ItemInfo.defaultProps = {
  titleStyle: styles.title,
  rightTitleStyle: styles.rightTitle
}
