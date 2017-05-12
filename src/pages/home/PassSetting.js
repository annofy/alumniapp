import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Icon
} from 'react-native-elements'

import Container from '../../common/Container'

export default class PassSetting extends React.Component {

  static navigationOptions({navigation, screenProps}) {
    return {
      title: '密码设置',
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
      <Container>
        <ScrollView>
          <View>
            <FormLabel>旧密码</FormLabel>
            <FormInput containerStyle={styles.input} onChangeText={() => {
            }}/>
            <FormValidationMessage></FormValidationMessage>
          </View>
          <View>
            <FormLabel>新密码</FormLabel>
            <FormInput containerStyle={styles.input}/>
            <FormValidationMessage></FormValidationMessage>
          </View>
          <View>
            <FormLabel>确认密码</FormLabel>
            <FormInput containerStyle={styles.input}/>
            <FormValidationMessage></FormValidationMessage>
          </View>
          <View>
            <Button
              buttonStyle={{height: 36, backgroundColor: '#96BF5C', marginBottom: 20}}
              title='提交'/>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
  }
})