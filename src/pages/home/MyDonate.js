import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import {
  PricingCard,
  Icon
} from 'react-native-elements'

import Container from '../../common/Container'
import ListInfo from "../../common/ListInfo";
import ItemInfo from '../../common/ItemInfo'

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
      donatList: [
        {time: '2008-10-20', desc: '捐赠', money: '￥10000'},
        {time: '2009-10-20', desc: '捐赠', money: '￥10010'},
        {time: '2010-10-20', desc: '捐赠', money: '￥10020'},
        {time: '2011-10-20', desc: '捐赠', money: '￥10030'},
        {time: '2012-10-20', desc: '捐赠', money: '￥10040'},
      ]
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <View>
        <ScrollView style={{ paddingBottom: 20}}>
          <Container>
            <PricingCard
              color='#4f9deb'
              title='累计捐赠'
              price='￥100000'
              info={['mmm在校友中排名第20名', '最强校友：xxx']}
              button={{title: '支持学校发展', icon: 'flight-takeoff'}}
            />
          </Container>
          <Container>
            <ListInfo>
              {
                this.state.donatList.map((cv, i) => (
                  <ItemInfo key={i} title={cv.time} subtitle={ cv.desc} rightTitle={cv.money}/>
                ))
              }
            </ListInfo>
          </Container>
        </ScrollView>
      </View>
    )
  }
}