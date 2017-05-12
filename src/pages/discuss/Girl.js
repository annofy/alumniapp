import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements'
import ListInfo from '../../common/ListInfo'
import ItemInfo from '../../common/ItemInfo'

export default class Girl extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'GIRL',
    tabBarIcon:
      <Icon
        name="female"
        type="ionicons"
        color= '#fff'
      />
  }

  constructor(props) {
    super(props)
    this.state = {
      girls: [
        { gid: 1, title: '12年汽院萌妹子一枚求帅气学长带走', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 2, title: '11年的汽车学院高级技师找心中的她', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 3, title: '11年汽车学院高级汽车技师', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 4, title: '10年机械系高级机械师找妹子找老婆', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 5, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 6, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 7, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 8, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 9, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 10, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
        { gid: 11, title: '12年汽院校友高级web工程师寻一知心校友', desc: 'xxxxxxxxxxxxxxxxxxx'},
      ]
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <ScrollView>
          <ListInfo>
            {this.state.girls.map(cv => (
              <ItemInfo key={cv.gid} title={cv.title} subtitle={cv.desc} onPress={() => navigate('MiaiDetail', { gid: cv.gid }) }/>
            ))}
          </ListInfo>
        </ScrollView>
      </View>
    )
  }
}