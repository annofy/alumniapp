import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements'
import ListInfo from '../../common/ListInfo'
import ItemInfo from '../../common/ItemInfo'

export default class Boy extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'BOY',
    tabBarIcon: ({tintColor, focused}) => (
      <Icon
        name="male"
        type="ionicons"
      />
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      boys: [
        { bid: 1, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 2, title: '11年的汽车学院高级技师找心中的她', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 3, title: '11年汽车学院高级汽车技师', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 4, title: '10年机械系高级机械师找妹子找老婆', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 5, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 6, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 7, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 8, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 9, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 10, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { bid: 11, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
      ]
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <ScrollView>
          <ListInfo>
            {this.state.boys.map(cv => (
              <ItemInfo key={cv.bid} title={cv.title} subtitle={cv.desc} onPress={() => navigate('MiaiDetail', {bid: cv.bid})}/>
            ))}
          </ListInfo>
        </ScrollView>
      </View>
    )
  }
}