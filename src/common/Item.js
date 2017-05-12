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

export default class Item extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.item}>

      </View>
    )
  }
}
