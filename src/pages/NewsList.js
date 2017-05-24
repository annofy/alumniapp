import React from 'react'
import {
  Text, View, ScrollView, StyleSheet, ViewPagerAndroid, Image, ToastAndroid, RefreshControl,
  TouchableHighlight
} from 'react-native'
import {Grid, Row, ListItem} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'
import Swiper from 'react-native-swiper'
import Container from '../common/Container'
import ListInfo from '../common/ListInfo'
import Info from "./home/Info";
import ItemInfo from "../common/ItemInfo";
import NewsInfo from './newlist/NewsInfo'
import Config from 'react-native-config'

class NewsList extends React.Component {

  static navigationOptions = {
    headerStyle: {height: 0, overflow: 'hidden'}
  }

  constructor(props) {
    super(props)
    this.state = {
      newsList: [],
      pageIndex: 0,
      pageCount: 0,
      isRefreshing: false
    }

  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {

    fetch(Config.API_URL + '/newslist', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        start: this.state.pageIndex
      })
    }).then(res => res.json())
      .then(res => {
        if (res.success) {
          ToastAndroid.show(`成功拉取到${res.data.count}条校园新闻`, ToastAndroid.SHORT)
          this.setState({
            newsList: this.state.newsList.concat(res.data.newsList),
            pageCount: res.data.pageCount
          })
        } else {
          ToastAndroid.show(`拉取新闻失败${res.reason}`, ToastAndroid.SHORT)
        }
      })
  }


  onRefresh() {
    console.log('更新操作')
    this.fetchData()
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Grid containerStyle={ styles.container}>
        <Row containerStyle={styles.header} size={1}>
          <Swiper autoplay={true} showsButtons={true} height={160}>
            <View style={{flex: 1}}>
              <Image style={{flex: 1, height: 160}}
                     source={{uri: 'http://news.huat.edu.cn/_mediafile/news/2017/05/19/2imc13g7sq.png'}}>
              </Image>
            </View>
            <View style={{flex: 1}}>
              <Image style={{flex: 1, height: 160}}
                     source={{uri: 'http://news.huat.edu.cn/_mediafile/news/2017/05/12/16np6euoz7.jpg'}}>
              </Image>
            </View>
          </Swiper>
        </Row>
        <Row size={3} containerStyle={{paddingTop: 2}}>
          <ScrollView refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#eee"
            />
          }>
            <ListInfo>
              {
                this.state.newsList.map((cv, i) => {
                  if (i < 4) {
                    return (
                      <ListItem onPress={() => {
                        this.props.screenProps.hiddenBar()
                        return navigate('NewsInfo', {id: cv._id, title: cv.title, hash: cv.hash, url: cv.url})
                      }} hideChevron={true} leftIcon={{name: 'fire', color: '#ED602B', type: 'font-awesome'}}
                                title={cv.title} key={cv._id} subtitle={cv.desc}/>
                    )
                  } else {
                    return (
                      <ListItem onPress={() => {
                        this.props.screenProps.hiddenBar()
                        return navigate('NewsInfo', {id: cv._id, title: cv.title, hash: cv.hash})
                      }} hideChevron={true} title={cv.title} key={cv._id} subtitle={cv.desc}/>
                    )
                  }
                })
              }
            </ListInfo>
            <TouchableHighlight underlayColor="transparent" onPress={() => {
              console.log('[page]', this.state.pageCount)
              this.setState({
                pageIndex: this.state.pageIndex + 1
              }, () => {
                if (this.state.pageIndex < this.state.pageCount) {
                  this.fetchData()
                } else {
                  ToastAndroid.show('没有更多内容了', ToastAndroid.SHORT);
                }
              })
            }}>
              <Text style={{alignSelf: 'center', color: '#444', fontSize: 14, margin: 20}}>----加载更多----</Text>
            </TouchableHighlight>
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