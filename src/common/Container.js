import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {

} from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 10,
  }
})
// todo 变成滚动容器
export default class Container extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.children }
      </View>
    )
  }
}
