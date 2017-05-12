import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import {
  Grid,
  Row,
  Col,
  Icon
} from 'react-native-elements'

import {
  StackNavigator
} from 'react-navigation'

import TopicList from './discuss/TopicList'
import TopicDetail from './discuss/TopicDetail'
import MiaiDetail from './discuss/MiaiDetail'
import SchoolDating from './discuss/SchoolDating'

class Discuss extends React.Component {

  static navigationOptions(navigation, screenProps){
    return ({
      headerStyle: {height: 0, overflow: 'hidden'}
    })
  }

  constructor(props) {
    super(props)
  }


  render() {
    const {navigate} = this.props.navigation
    return (
      <Grid>
        <Row size={3}>
          <Col containerStyle={styles.col}>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('TopicList', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='laptop'
                    type='font-awesome'
                    color='#6A7085'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>计算机</Text>
                </View>
              </TouchableHighlight>
            </Row>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('TopicList', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='car'
                    type='font-awesome'
                    color='#6A7085'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>汽车工程</Text>
                </View>
              </TouchableHighlight>
            </Row>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('SchoolDating', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='heartbeat'
                    type='font-awesome'
                    color='#ED602B'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>校友相亲</Text>
                </View>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col containerStyle={styles.col}>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('TopicList', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='institution'
                    type='font-awesome'
                    color='#F0D7B6'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>法律</Text>
                </View>
              </TouchableHighlight>
            </Row>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('TopicList', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='eyedropper'
                    type='font-awesome'
                    color='#F39736'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>理学</Text>
                </View>
              </TouchableHighlight>
            </Row>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('TopicList', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='mortar-board'
                    type='font-awesome'
                    color='#2E2A53'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>找恩师</Text>
                </View>
              </TouchableHighlight>
            </Row>
          </Col>
          <Col>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('TopicList', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='gears'
                    type='font-awesome'
                    color='#000'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>机械</Text>
                </View>
              </TouchableHighlight>
            </Row>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem } onPress={() => {
                this.props.screenProps.hiddenBar()
                return navigate('TopicList', {typeId: 1})
              }}>
                <View>
                  <Icon
                    name='etsy'
                    type='font-awesome'
                    color='#4285F4'
                    iconStyle={{fontSize: 40}}
                  />
                  <Text style={styles.menu}>外国语</Text>
                </View>
              </TouchableHighlight>
            </Row>
            <Row containerStyle={ styles.row}>
              <TouchableHighlight underlayColor="#F3F3F3" style={ styles.menuItem }>
                <View>
                </View>
              </TouchableHighlight>
            </Row>
          </Col>
        </Row>
        <Row size={1}>
        </Row>

      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  col: {
    borderRightWidth: 1,
    borderColor: '#ccc'
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  menu: {
    textAlign: 'center',
    color: '#444',
    marginTop: 5
  }
})

export default StackNavigator({
  Discuss: {
    screen: Discuss
  },
  TopicList: {
    screen: TopicList
  },
  SchoolDating: {
    screen: SchoolDating
  },
  TopicDetail: {
    screen: TopicDetail
  },
  MiaiDetail: {
    screen: MiaiDetail
  }
})