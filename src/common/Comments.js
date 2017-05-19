import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import {Button} from 'react-native-elements'

export default class Comments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: [
        {
          postId: 1,
          from: {name: 'zhengsan '},
          to: {name: 'lisi'},
          content: '看了这篇文章心里很激动',
          meta: {
            createAt: '2017-05-18 20:30',
          }
        },
        {
          postId: 2,
          from: {name: '王五'},
          to: {name: 'lisi'},
          content: '看了这篇文章心里很激动',
          meta: {
            createAt: '2017-05-18 20:30',
          }
        },
        {
          postId: 1,
          from: {name: 'zhengsan '},
          to: {name: 'lisi'},
          content: '看了这篇文章心里很激动',
          meta: {
            createAt: '2017-05-18 20:30',
          }
        },
        {
          postId: 1,
          from: {name: 'zhengsan '},
          to: {name: 'lisi'},
          content: '看了这篇文章心里很激动',
          meta: {
            createAt: '2017-05-18 20:30',
          }
        },
        {
          postId: 1,
          from: {name: 'zhengsan '},
          to: {name: 'lisi'},
          content: '看了这篇文章心里很激动',
          meta: {
            createAt: '2017-05-18 20:30',
          }
        },
      ]
    }
  }


  render() {
    return (
      <View>
        <View style={styles.inputBox}>
          <View style={styles.border}>
            <TextInput multiline style={styles.input} underlineColorAndroid="transparent"></TextInput>
          </View>
          <Button title="骚年,来一发" borderRadius={8} backgroundColor="#5CC9F5" buttonStyle={styles.btn}/>
        </View>
        <View style={styles.divider}>
          <Text style={styles.tips}>下面是评论详情</Text>
        </View>
        <View style={styles.commentBox}>

        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  inputBox: {
    padding: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5
  },
  input: {
    textAlignVertical: 'top',
    padding: 0,
    height: 80,
  },
  btn: {
    height: 36,
    width: 120,
    alignSelf: 'flex-end',
    marginRight: 0,
    marginTop: 8
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 10
  },
  tips: {
    fontSize: 12,
    color: '#666',
  }
})