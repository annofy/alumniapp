import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  List
} from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0, backgroundColor: '#fff'
  }
})

export default class ListInfo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <List containerStyle={styles.container}>
        {this.props.children}
      </List>
    )
  }
}
