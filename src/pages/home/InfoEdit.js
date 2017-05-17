import React from 'react'
import {View, Text, TouchableHighlight, ToastAndroid} from 'react-native'
import {Icon} from 'react-native-elements'
import {ItemInput} from '../../common/ItemInput'

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
      headerLeft: <Icon
        name='chevron-left'
        type='ionicons'
        color='#333'
        underlayColor="#ccc"
        containerStyle={{flex: 1, paddingRight: 10}}
        onPress={() => {
          navigation.goBack()
        }}/>,
      headerRight: <TouchableHighlight underlayColor="transparent" style={{paddingRight: 10}} onPress={ () => {
        ToastAndroid.show('保存信息成功', ToastAndroid.SHORT)
      }}>
        <Text>保存</Text>
      </TouchableHighlight>
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
      graduation: props.navigation.state.params.graduation
    }
  }

  render() {
    const {setParams} = this.props.navigation
    return (
      <View style={{backgroundColor: '#fff', marginTop: 4}}>
        <ItemInput label="姓名" value={this.state.name} onChangeText={text => this.setState({name: text})}/>
        <ItemInput label="手机号" value={this.state.phone} onChangeText={text => this.setState({phone: text})}/>
        <ItemInput label="所在省" value={this.state.locationProvince} onChangeText={text => this.setState({locationProvince: text})}/>
        <ItemInput label="所在市" value={this.state.locationCity} onChangeText={text => this.setState({locationCity: text})}/>
        <ItemInput label="行业" value={this.state.industry} onChangeText={text => this.setState({industry: text})}/>
        <ItemInput label="学历信息" value={this.state.graduation} onChangeText={text => this.setState({graduation: text})}/>
      </View>
    )
  }
}