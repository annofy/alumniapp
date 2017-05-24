import React from 'react'
import { Linking, ToastAndroid } from 'react-native'
import Container from '../../common/Container'
import ListInfo from '../../common/ListInfo'
import ItemInfo from "../../common/ItemInfo";
import {Icon} from 'react-native-elements'


export default class PayWay extends React.Component {

  static navigationOptions(navigation) {
    return {
      title: '支付方式',
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
  }

  onPress(type) {
    Linking.canOpenURL(`${type}://`).then(supported => { // weixin://  alipay://
      if (supported) {
        Linking.openURL(`${type}://`);
      } else {
        let tips = { 'weixin': '微信', 'alipay': '支付宝'};
        ToastAndroid.show(`请先安装${tips[type]}`, ToastAndroid.SHORT);
      }
    });
  }

  render() {
    return (
     <Container>
       <ListInfo>
         <ItemInfo title="微信支付" subtitle="点击打开微信" onPress={this.onPress.bind(this, 'weixin')}/>
         <ItemInfo title="支付宝支付" subtitle="点击打开支付宝" onPress={this.onPress.bind(this, 'alipay')}/>
       </ListInfo>
     </Container>
    )
  }
}