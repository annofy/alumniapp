import React from 'react'
import {View, Text, Image, ScrollView, StyleSheet, Dimensions} from 'react-native'
import {Icon, Divider, Badge} from 'react-native-elements'

export default class MiaiDetail extends React.Component {

  static navigationOptions(navigation) {
    return {
      headerStyle: {
        height: 45
      },
      headerTitleStyle: {
        color: '#323232',
        fontSize: 16,
        fontWeight: 'normal'
      },
      headerLeft: <Icon
        name='chevron-left'
        type='ionicons'
        color='#333'
        underlayColor="#ccc"
        containerStyle={{flex: 1, paddingRight: 10}}
        onPress={() => {
          navigation.navigation.goBack()
        }}/>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      heartIcon: 'ios-heart-outline',
      clickHeartCount: 0,
      shareCount: 0
    }
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    this.setState({
      heartIcon: 'ios-heart',
      clickHeartCount: this.state.clickHeartCount + 1
    })
  }

  render() {
    return (
      <View style={styles.topic}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>程序猿眼中靠谱的产品经理，小朋友们喜欢的自然体验师</Text>
            <View style={styles.sub}>
              <Badge containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#5CC9F5'
              }}>
                <Text style={styles.subtitle}>原创</Text>
              </Badge>
            </View>
          </View>
          <Divider style={{marginTop: 15, marginBottom: 20,}}/>
          <View style={styles.bottom}>
            <Image style={{width: Dimensions.width, height: 200}}
                   source={{uri: 'https://mmbiz.qpic.cn/mmbiz_jpg/zwSnc6KZ3gRRYd2QEVLZFEjvMq8MN8ibic0V2OKibOQrM5khKibiaZM82hH9H5KuzjG8JiaDIdiaiaic63MugN3ugOic2jSA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'}}/>
            <Text style={styles.content}>
              出生年月：1991年5月 {'\n'}
              身高：167{'\n'}
              体重：110{'\n'}
              婚姻状况：未婚{'\n'}
              学历：本科{'\n'}
              所在城市：西安{'\n'}
              籍贯：西安{'\n'}
              职业：互联网产品经理{'\n'}
              父母情况：母亲在银行上班，父亲自己开公司{'\n'}
              是否是独生子女: 不是，有一个弟弟{'\n'}
              收入描述：10K+{'\n'}
              兴趣爱好：热爱大自然，研究儿童心理学，运动是一种生活方式{'\n'}
              是否接受异地恋：看情况{'\n'}
              打算几年内结婚：三年左右吧{'\n'}
              要几个小孩（0至n）：目前1个，以后不知道{'\n'}
              对另一半的最低要求是：有独立的经济能力{'\n'}
              对另一半的特殊要求是：追求成长的开放型心态{'\n'}
              一句话让自己脱颖而出： 程序猿眼中靠谱的产品经理，小朋友们喜欢的自然体验师{'\n'}

              PS：专业背包客，曾徒步环青海，和弟弟从西安搭车去香港，一个人去马来西亚学潜水，在东极岛露营看星星，在泰国清迈的素贴山上闭关冥想，下一个目标去新西兰跳伞......
              热爱篮球，大学打了四年球，带领我们院女篮拿了三届冠军，感谢篮球让我明白了很多道理，教我成长。{'\n'}

              我的心态是比较开放，成长型的。在踏实努力地做好工作，打理好生活的基础上，喜欢去尝试体验各种新鲜事物，拓展自己脑海里的地图。如果你也在寻找一个热爱生活，对世界充满好奇心的人，那咱们可以一起把万水千山都走遍 :)
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={{flex: 5}}/>
            <View style={styles.iconView}>
              <Icon
                name={this.state.heartIcon}
                type="ionicon"
                color="#555"
                onPress={this.onPress}
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
                }}
              /><Text>({this.state.shareCount})</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topic: {
    padding: 10,
    marginTop: 4,
    backgroundColor: '#fff'
  },
  title: {
    color: '#343434',
    fontSize: 18,
  },
  sub: {
    width: 60,
    height: 18
  },
  subtitle: {
    color: '#5CC9F5',
    fontSize: 13,
    lineHeight: 14
  },
  content: {
    color: '#555',
    fontSize: 13
  },
  footer: {
    flex: 1, flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  iconView: {
    flex: 1,
    flexDirection: 'row'
  }
})