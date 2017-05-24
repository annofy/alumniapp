import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
export default class Struct extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <View style={styles.container}>
      <ScrollView>
        <Text style={styles.desc}>介绍: 项目来自于一个偶然的想法。</Text>
        <Text style={styles.author}>作者: zhenglongfan</Text>
        <Text style={styles.content}>
          <Text style={styles.title}>第一部分: 新闻咨询 {'\n'}</Text>
          |-- 新闻列表{'\n'}
          |-- 分页查询{'\n'}
          |-- 详情{'\n'}
          |-- 分享{'\n'}
          |-- 评论{'\n'}
          <Text style={styles.title}>第二部分: 校友地图 {'\n'}</Text>
          |-- 地理查询{'\n'}
          |-- 该城市校友{'\n'}
          |-- 联系校友{'\n'}
          |-- 发送邮件{'\n'}
          <Text style={styles.title}>第三部分: 交流讨论{'\n'}</Text>
          |-- 帖子{'\n'}
          |-- 评论{'\n'}
          |-- 转发{'\n'}
          |-- 师生交流{'\n'}
          |-- 校友交流{'\n'}
          <Text style={styles.title}>第四部门: 个人中心{'\n'}</Text>
          |-- 信息修改{'\n'}
          |-- 绑定手机{'\n'}
          |-- 邮箱{'\n'}
          |-- app设置{'\n'}
          |-- 消息通知{'\n'}
          |-- 捐赠{'\n'}
          |-- 关于{'\n'}
          <Text style={styles.title}>第五步: 项目结构{'\n'}</Text>
          |-- 项目描述{'\n'}
        </Text>
      </ScrollView>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  desc: {
    color: '#444',
    fontSize: 15,
    marginBottom: 10
  },
  author: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 20
  },
  content: {
    color: '#111',
    fontSize: 16
  },
  title: {
    fontWeight: 'bold'
  }
})