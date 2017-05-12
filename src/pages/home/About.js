import React from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  Card,
  Button,
  Icon
} from 'react-native-elements'


export default class About extends React.Component {

  static navigationOptions({navigation, screenProps}) {
    console.log(navigation)
    return {
      title: '关于',
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
          screenProps.showBar()
          navigation.goBack()
        }}/>
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card
        title='Hello, Welcome You'
        image={{uri: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'}}>
        <Text style={{marginBottom: 10}}>
          如果使用中有什么问题，请点击下面按钮联系我，很高兴为您提供技术支持.
        </Text>
        <Text>
          邮箱: zhenglfsir@gmail.com
        </Text>
        <Text>
          手机: 18372627060
        </Text>
        <Button
          icon={{name: 'email'}}
          backgroundColor='#03A9F4'
          fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10, marginBottom: 0}}
          title='联系我'/>
      </Card>
    )
  }
}