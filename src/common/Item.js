import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  ListItem
} from 'react-native-elements'

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5
  },
  title: {
    color: '#666',
    fontSize: 14,
  },
  time: {
    color: '#bbb',
    marginTop: 4,
    marginBottom: 4,
  },
  content: {
    color: '#333'
  }
})

export default class Item extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.time}>{this.props.time}</Text>
        <Text style={styles.content}>
          {this.props.content}
        </Text>
      </View>
    )
  }
}

Item.defaultProps = {
  title: '系统消息'
}