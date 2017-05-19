import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import LeftBtn from '../../common/LeftBtn'
import Item from '../../common/Item'

export default class SysMessage extends React.Component {

  static navigationOptions({navigation, screenProps}) {
    const {state} = navigation
    return {
      title: '系统消息',
      headerStyle: {
        height: 45
      },
      headerTitleStyle: {
        color: '#323232',
        fontSize: 16,
        fontWeight: 'normal'
      },
      headerLeft: <LeftBtn navigation={navigation} screenProps={screenProps}/>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          from: 'system',
          to: 'all',
          content: '系统更新啦，让你和更加愉快享受校园生活。赶快去下载吧。',
          meta: {
            createAt: '2017-5-19',
            updateAt: '2017-5-18'
          }
        },
        {
          from: 'system',
          to: 'all',
          content: '系统更新啦，让你和更加愉快享受校园生活。赶快去下载吧。',
          meta: {
            createAt: '2017-5-19',
            updateAt: '2017-5-18'
          }
        },
        {
          from: 'system',
          to: 'all',
          content: '系统更新啦，让你和更加愉快享受校园生活。赶快去下载吧。',
          meta: {
            createAt: '2017-5-19',
            updateAt: '2017-5-18'
          }
        },
        {
          from: 'system',
          to: 'all',
          content: '系统更新啦，让你和更加愉快享受校园生活。赶快去下载吧。',
          meta: {
            createAt: '2017-5-19',
            updateAt: '2017-5-18'
          }
        },
        {
          from: 'system',
          to: 'all',
          content: '系统更新啦，让你和更加愉快享受校园生活。赶快去下载吧。',
          meta: {
            createAt: '2017-5-19',
            updateAt: '2017-5-18'
          }
        },
        {
          from: 'system',
          to: 'all',
          content: '系统更新啦，让你和更加愉快享受校园生活。赶快去下载吧。',
          meta: {
            createAt: '2017-5-19',
            updateAt: '2017-5-18'
          }
        },
        {
          from: 'system',
          to: 'all',
          content: '系统更新啦，让你和更加愉快享受校园生活。赶快去下载吧。',
          meta: {
            createAt: '2017-5-19',
            updateAt: '2017-5-18'
          }
        },
      ]
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          {
            this.state.messages.map((cv, index) => <Item content={cv.content} key={index} time={cv.meta.createAt}/>)
          }
        </ScrollView>
      </View>
    )
  }

}