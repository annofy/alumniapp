import React from 'react'
import {View, Text, StyleSheet, ScrollView, AsyncStorage,ToastAndroid} from 'react-native'
import {FormLabel, FormInput, Button} from 'react-native-elements'
import {Geolocation} from 'react-native-baidu-map'
import Container from '../common/Container'
import Config from 'react-native-config'
import MainView from './MainView'


export default class Login extends React.Component {

  constructor(props) {
    super(props)
    console.log('props', props)
    this.state = {
      form: {
        name: '',
        company: '',
        email: '',
        city: ''
      },
      nameErr: '',
      companyErr: '',
      emailErr: '',
      cityErr: ''
    }
  }

  componentWillMount() {
    Geolocation.getCurrentPosition()
      .then(location => {
        this.setState({
          form: {...this.state.form, city: location.city}
        })
      })
  }

  onPress() {
    const {navigator} = this.props
    fetch(`${Config.API_URL}/home/income`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        form: this.state.form
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          console.log('[user]', res)
          return AsyncStorage.multiSet([['userId', res.data._id], ['uname', res.data.name]])
        }
      })
      .then(() => {
        ToastAndroid.show('登录成功', ToastAndroid.SHORT)
        navigator.resetTo({
          name: 'MainView',
          component: MainView
        })
      })
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <Text style={{alignSelf: 'center', fontSize: 18, marginTop: 20}}>完善信息进入应用</Text>
          <Text style={{alignSelf: 'center', fontSize: 13, marginTop: 4, marginBottom: 6}}>
            填写信息，实名交流。延续我们友谊
          </Text>
          <View>
            <FormLabel>姓名</FormLabel>
            <FormInput containerStyle={styles.input} onChangeText={name => this.setState({
              form: {...this.state.form, name}
            })}/>
          </View>
          <View>
            <FormLabel>公司</FormLabel>
            <FormInput containerStyle={styles.input} onChangeText={company => this.setState({
              form: {...this.state.form, company}
            })}/>
          </View>
          <View>
            <FormLabel>邮箱</FormLabel>
            <FormInput containerStyle={styles.input} onChangeText={email => this.setState({
              form: {...this.state.form, email}
            })}/>
          </View>
          <View>
            <FormLabel>所在城市</FormLabel>
            <FormInput value={this.state.form.city} containerStyle={styles.input} onChangeText={city => this.setState({
              form: {...this.state.form, city}
            })}/>
          </View>
          <Button title="登录/注册" backgroundColor="#97C05D" onPress={this.onPress.bind(this)}/>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
  }
})