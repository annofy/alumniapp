import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import {
  SearchBar,
  Grid,
  Row,
  Icon
} from 'react-native-elements'

import ListInfo from '../../common/ListInfo'
import ItemInfo from '../../common/ItemInfo'

export default class TopicList extends React.Component {
  /*
   { navigation:
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:    { dispatch: [Function],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      state:
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:       { params: { typeId: 1 },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:         key: 'id-1494516041742-0',
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:         routeName: 'TopicList' },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      goBack: [Function: goBack],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      navigate: [Function: navigate],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      setParams: [Function: setParams] },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:   screenProps:{ hiddenBar: [Function: proxiedMethod],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      showBar: [Function: proxiedMethod] },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:   navigationOptions: {} }
   */
  static navigationOptions(navigation) {
    return ({
      title: '交流模块',
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
          navigation.screenProps.showBar()
          navigation.navigation.goBack()
        }} />
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      newsList: [
        { id: 1, title: '腾讯学长带人有意向投简历发邮箱', desc: '学长带你进名气'},
        { id: 2, title: '北京大学学长考研经验公开', desc: '考研分享'},
        { id: 3, title: '投身计算机的童鞋们技术分享速来', desc: '技术共享'},
        { id: 4, title: '二叉树的原理剖析', desc: '深度分析'},
        { id: 5, title: '滑动滚屏的原理分析', desc: '深度分析'},
        { id: 6, title: '浏览器的网络请求分析', desc: '学长带你进名气'},
        { id: 7, title: 'html5和es6的基本使用', desc: '学长带你进名气'},
        { id: 8, title: '腾讯学长带人有意向投简历发邮箱', desc: '学长带你进名气'},
        { id: 9, title: '腾讯学长带人有意向投简历发邮箱', desc: '学长带你进名气'},
        { id: 10, title: '腾讯学长带人有意向投简历发邮箱', desc: '学长带你进名气'},
        { id: 11, title: '腾讯学长带人有意向投简历发邮箱', desc: '学长带你进名气'},
      ]
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Grid>
        <Row size={1}>
          <View style={{flex: 1}}>
            <SearchBar
              lightTheme
              clearIcon
              onChangeText={() => {
              }}
              containerStyle={styles.search}
              inputStyle={styles.searchInput}
              textInputRef="search"
              icon={{ style: styles.icon }}
              placeholder='选个主题搜索一下'/>
          </View>
        </Row>
        <Row size={9}>
          <ScrollView>
            <ListInfo>
              {
                this.state.newsList.map(cv => (
                  <ItemInfo key={cv.id} title={cv.title} subtitle={cv.desc} onPress={() => navigate('TopicDetail', { tid: cv.id})}/>
                ))
              }
            </ListInfo>
          </ScrollView>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    height: 46
  },
  searchInput: {
    height: 36,
    marginBottom: 4
  },
  icon: {
    marginTop: -4
  },
  btnBack: {
    backgroundColor: 'transparent',
  }
})