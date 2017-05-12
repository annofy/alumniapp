import React from 'react'
import {
  Text, View, ScrollView, StyleSheet, ViewPagerAndroid, Image
} from 'react-native'

import {Grid, Row, ListItem} from 'react-native-elements'

import {StackNavigator} from 'react-navigation'
import Swiper from 'react-native-swiper'

import Container from '../common/Container'
import ListInfo from '../common/ListInfo'
import Info from "./home/Info";
import ItemInfo from "../common/ItemInfo";

import NewsInfo from './newlist/NewsInfo'

class NewsList extends React.Component {

  static navigationOptions = {
    headerStyle: {height: 0, overflow: 'hidden'}
  }

  constructor(props) {
    super(props)
    this.state = {
      newsList: [
        {newsId: '1', title: '湖北汽车工业学院破格提升211院校', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '2', title: '知名校友xxx捐款组建校青年奖学金', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '3', title: '18级ddd在ACM大赛中勇得冠军得到奖金10w', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '4', title: '十堰四所高校合并以汽院专业为基础扩建', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '5', title: '我校得到教育部资金10亿用来建设学校', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '6', title: '我校得到教育部资金10亿用来建设学校', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '7', title: '我校得到教育部资金10亿用来建设学校', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '8', title: '我校得到教育部资金10亿用来建设学校', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
        {newsId: '9', title: '我校得到教育部资金10亿用来建设学校', desc: '经过教育部深度研究，汽车学院在近年各方面取得显著成绩。'},
      ],
      pageIndex: 0
    }

    this.setPage = this.setPage.bind(this)
  }

  setPage() {
    return this.state.pageIndex
  }

  pageSelect(position) {
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Grid containerStyle={ styles.container}>
        <Row containerStyle={styles.header} size={1}>
          <Swiper autoplay={true} showsButtons={true} height={160}>
            <View style={{flex: 1}}>
              <Image style={{flex: 1, height: 160}}
                     source={{uri: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'}}>
              </Image>
            </View>
            <View style={{flex: 1}}>
              <Image style={{flex: 1, height: 160}}
                     source={{uri: 'http://img02.tooopen.com/images/20160408/tooopen_sy_158723161481.jpg'}}>
              </Image>
            </View>
          </Swiper>
        </Row>
        <Row size={3} containerStyle={{paddingTop: 2}}>
          <ScrollView>
            <ListInfo>
              {
                this.state.newsList.map((cv, i) => {
                  if (i < 4) {
                    return (
                      <ListItem onPress={() => {
                        this.props.screenProps.hiddenBar()
                        return navigate('NewsInfo', {id: cv.newsId, title: cv.title})
                      }} hideChevron={true} leftIcon={{name: 'fire', color: '#ED602B', type: 'font-awesome'}}
                                title={cv.title} key={cv.newsId} subtitle={cv.desc}/>
                    )
                  } else {
                    return (
                      <ListItem onPress={() => {
                        this.props.screenProps.hiddenBar()
                        return navigate('NewsInfo', {id: cv.newsId, title: cv.title})
                      }} hideChevron={true} title={cv.title} key={cv.newsId} subtitle={cv.desc}/>
                    )
                  }
                })
              }
            </ListInfo>
          </ScrollView>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',

  },
  header: {
    backgroundColor: '#fff',
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
})

export default StackNavigator({
  NewsList: {
    screen: NewsList
  },
  NewsInfo: {
    path: 'news/:id',
    screen: NewsInfo
  }
})