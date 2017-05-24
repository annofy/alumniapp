import React from 'react'
import {
  View,
  Text,
  ScrollView, TouchableHighlight,
  ToastAndroid
} from 'react-native'

import {
  PricingCard,
  Icon
} from 'react-native-elements'

import Container from '../../common/Container'
import ListInfo from "../../common/ListInfo";
import ItemInfo from '../../common/ItemInfo'
import Config from 'react-native-config'

export default class MyDonate extends React.Component {

  static navigationOptions(navigation) {
    return {
      title: '我的捐赠',
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
        }}/>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      donatList: [],
      pageIndex: 0,
      pageCount: 0,
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(`${Config.API_URL}/donate`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        start: this.state.pageIndex
      })
    })
      .then(res => res.json())
      .then(res => {
        ToastAndroid.show('有' + res.data.list.length + '条数据', ToastAndroid.SHORT)
        console.log(res.data)
        this.setState({
          donatList: this.state.donatList.concat(res.data.list),
          pageCount: res.data.pageCount,
          total: res.data.total
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <View>
        <ScrollView style={{paddingBottom: 20}}>
          <Container>
            <PricingCard
              color='#4f9deb'
              title='累计捐赠'
              price= { '￥' + parseInt(this.state.total) }
              info={['mmm在校友中排名第20名', '最强校友：xxx']}
              button={{title: '支持学校发展', icon: 'flight-takeoff'}}
              onButtonPress={() => {
                this.props.navigation.navigate('PayWay', {})
              }}
            />
          </Container>
          <Container>
            <ListInfo>
              {
                this.state.donatList.map((cv, i) => (
                  <ItemInfo key={i} title={new Date(cv.time).toLocaleString()} subtitle={ cv.type} rightTitle={ '￥' + cv.money}/>
                ))
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
          </Container>
        </ScrollView>
      </View>
    )
  }
}