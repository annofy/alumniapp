import React from 'react'
import {View, Text, Image, ScrollView, StyleSheet, Dimensions, Share} from 'react-native'
import {Icon, Divider, Badge} from 'react-native-elements'
import Comments from '../../common/Comments'

export default class TopicDetail extends React.Component {

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
    this._shareText = this._shareText.bind(this)
  }

  onPress() {
    this.setState({
      heartIcon: 'ios-heart',
      clickHeartCount: this.state.clickHeartCount + 1
    })
  }

  _shareText() {
    Share.share({
      message: 'A framework for building native apps using React',
      title: 'React Native'
    }).then(this._showResult).catch((error) => this.setState({result: 'error: ' + error.message}));
  }


  render() {
    return (
      <View style={styles.topic}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>前端开发工程师</Text>
            <View style={styles.sub}>
              <Badge containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#FEBB02'
              }}>
                <Text style={styles.subtitle}>急</Text>
              </Badge>
              <Badge containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#FEBB02'
              }}>
                <Text style={styles.subtitle}>推荐</Text>
              </Badge>
            </View>
          </View>
          <Divider style={{marginTop: 15, marginBottom: 20,}}/>
          <View style={styles.bottom}>
            <Image style={{width: Dimensions.width, height: 200}}
                   source={{uri: 'http://img.debugrun.com/pic/2017/3/27/e4c8a8d0aa80e62158825556ebe8efae.jpg'}}/>
            <Text style={styles.content}>
              工作职责：{ '\n\n '}
              1.负责产品的前端的技术方案选型与设计；{ '\n'}
              2.Web前端表现层及与后端交互的设计和开发；{ '\n'}
              3.对用户体验和前端性能有很敏感的把控和优化手段，解决各种浏览器的兼容性问题 ；{ '\n'}
              4.关注前端前沿技术研究，通过新技术服务团队和业务。{ '\n\n'}

              岗位要求：{ '\n\n '}
              9.精通各种Web前端技术和标准(Javascript/ES6、HTML/HTML5、CSS/CSS3)，熟悉页面架构和布局，对表现与数据分离、Web语义化等有深刻理解；{ '\n'}
              10.精通React.js, Redux ,Vue.js等主流框架进行SPA开发，熟练使用less或sass进行前端开发，精通webpack、gulp等构建工具配置和使用；{ '\n'}
              11.对前端工程化与模块化开发有一定了解;{ '\n'}
              12.熟悉nodejs，通过nodejs (如express/koa) 搭建web服务；{ '\n'}
              13.至少熟悉一门非前端的语言（如Java/C#/PHP/C/C++/Python/Ruby），并有实践经验；{ '\n'}
              14.具备良好的团队协作精神，能利用自身技术能力提升团队整体研发效率，提高团队影响力；{ '\n'}
              15.对技术有激情，喜欢钻研，能快速接受和掌握新技术，有较强的独立、主动的学习能力，良好的沟通表达能力和团队协作能力。{ '\n'}
              16.全日制统招本科及以上学历，计算机相关专业，具有扎实的计算机基础理论知识；{ '\n'}
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
                  this._shareText()
                }}
              /><Text>({this.state.shareCount})</Text>
            </View>
          </View>
          <Comments/>
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
    height: 18,
    flexDirection: 'row'
  },
  subtitle: {
    color: '#FEBB02',
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