import React from 'react'
import {View, Text, TouchableHighlight, ToastAndroid} from 'react-native'
import {Icon} from 'react-native-elements'
import {ItemInput} from '../../common/ItemInput'
import Config from 'react-native-config'
import Tips from '../../common/Tips'
import RightBtn from '../../common/RightBtn'
import LeftBtn from '../../common/LeftBtn'

export default class InfoEdit extends React.Component {

  static navigationOptions({navigation}) {
    return {
      title: '编辑个人信息',
      headerStyle: {
        height: 45
      },
      headerTitleStyle: {
        color: '#323232',
        fontSize: 16,
        fontWeight: 'normal'
      },
      headerLeft: <LeftBtn navigation={navigation}/>,
      headerRight: <RightBtn label="保存" onPress={ () => {
        fetch(`${Config.API_URL}/home/info`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...navigation.state.params
          })
        }).then(res => {
          ToastAndroid.show('保存信息成功', ToastAndroid.SHORT)
          navigation.goBack()
        }).catch(err => {
          ToastAndroid.show('保存信息失败', ToastAndroid.SHORT)
        })
      }}/>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      name: props.navigation.state.params.name,
      phone: props.navigation.state.params.phone,
      locationProvince: props.navigation.state.params.locationProvince,
      locationCity: props.navigation.state.params.locationCity,
      industry: props.navigation.state.params.industry,
    }
  }

  render() {
    const {setParams} = this.props.navigation
    return (
      <View style={{backgroundColor: '#fff', marginTop: 4}}>
        <Tips tips="地址示例: 省份: 浙江 市: 杭州"/>
        <ItemInput label="姓名" value={this.state.name} onChangeText={text => setParams({name: text})}/>
        <ItemInput label="手机号" value={this.state.phone} onChangeText={text => setParams({phone: text})}/>
        <ItemInput label="所在省" value={this.state.locationProvince}
                   onChangeText={text => setParams({locationProvince: text})}/>
        <ItemInput label="所在市" value={this.state.locationCity} onChangeText={text => setParams({locationCity: text})}/>
        <ItemInput label="行业" value={this.state.industry} onChangeText={text => setParams({industry: text})}/>
      </View>
    )
  }
}