import React from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'

export default class ItemInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput style={styles.input} underlineColorAndroid="transparent" defaultValue={this.props.value}
                   onChangeText={this.props.onChangeText}/>
      </View>
    )
  }
}

ItemInput.defaultProps = {
  label: '标签',
  value: '默认值'
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 4,
    paddingBottom: 4
  },
  label: {
    flex: 3,
    padding: 10,
    color: '#898D98'
  },
  input: {
    flex: 7,
    textAlign: 'right',
    padding: 0,
    paddingRight: 10,
    borderBottomWidth: 0
  }
})