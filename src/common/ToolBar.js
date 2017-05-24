import React from 'react'
import {View, Share, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'

export default class ToolBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      heartIcon: 'ios-heart-outline',
      clickHeartCount: 0,
      shareCount: 0
    }
  }

  onPress() {
    this.setState({
      heartIcon: 'ios-heart',
      clickHeartCount: this.state.clickHeartCount + 1
    })
  }

  _shareText() {
    Share.share({
      message: '这是是非常精彩的内容，不想点一下吗?',
      title: this.props.title,
      url: this.props.url
    }).then(this._showResult).catch((error) => this.setState({result: 'error: ' + error.message}));
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={{flex: 5}}/>
        <View style={styles.iconView}>
          <Icon
            name={this.state.heartIcon}
            type="ionicon"
            color="#555"
            onPress={this.onPress.bind(this)}
          /><Text>({this.state.clickHeartCount})</Text>
        </View>
        <View style={styles.iconView}>
          <Icon
            name='ios-share'
            type="ionicon"
            color="#555"
            onPress={() => {
              this.setState({
                shareCount: this.state.shareCount + 1
              })
              this._shareText.bind(this)
            }}
          /><Text>({this.state.shareCount})</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    flexDirection: 'row'
  },
  footer: {
    flex: 1, flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: '#ccc'
  },
})