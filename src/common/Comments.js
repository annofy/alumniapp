import React from 'react'
import {View, StyleSheet, Text, TextInput, TouchableHighlight, ToastAndroid, AsyncStorage} from 'react-native'
import {Button} from 'react-native-elements'
import Config from 'react-native-config'

export default class Comments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      comments: props.comments,
      userId: ''
    }
  }

  componentWillComponent() {
    AsyncStorage.getItem('uname')
      .then(name => {
        this.setState({
          uname: name
        })
      })
  }

  onPress() {
    let content = this.state.value;
    if (content.length > 0) {
      let to = ''
      fetch(`${Config.API_URL}/comments`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tid: this.props.id,
          value: this.state.value,
          from: name,
          to: to
        })
      }).then(res => {

      })
      this.setState({
        comments: this.state.comments.concat({
          from: { name: 'zheng'},
          to: {},
          content: '就是说了看看而已'
        })
      })
    } else {
      ToastAndroid.show('写点内容在发表呗', ToastAndroid.SHORT)
    }


  }


  render() {
    return (
      <View>
        <View style={styles.inputBox}>
          <View style={styles.border}>
            <TextInput multiline style={styles.input} value={this.state.value}
                       onChangeText={text => this.setState({value: text})}
                       underlineColorAndroid="transparent"></TextInput>
          </View>
          <Button title="骚年,来一发" borderRadius={8} onPress={this.onPress.bind(this)} backgroundColor="#5CC9F5"
                  buttonStyle={styles.btn}/>
        </View>
        <View style={styles.divider}>
          <Text style={styles.tips}>下面是评论详情</Text>
        </View>
        {
          this.state.comments.map((cv, i) => {
            return <View style={styles.commentBox} key={i}>

              <View style={styles.commentHeader}>
                <Text>{cv.from.name}</Text><Text>{cv.to.name ? '对' + cv.to.name : ''}说:</Text>
              </View>
              <TouchableHighlight onPress={() => {
                this.setState({
                  value: '@' + cv.from.name + '说:'
                })
              }} underlayColor="transparent">
                <View style={styles.commentBody}>
                  <Text>{cv.content}</Text>
                </View>
              </TouchableHighlight>
            </View>
          })
        }
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
  },
  commentHeader: {
    flexDirection: 'row'
  },
  commentBody: {
    padding: 20
  }
})