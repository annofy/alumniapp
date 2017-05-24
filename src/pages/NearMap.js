import React from 'react'
import {Text, View, StyleSheet, Dimensions, ScrollView, ToastAndroid} from 'react-native'
import {Grid, Row} from 'react-native-elements'
import ListInfo from '../common/ListInfo'
import ItemInfo from '../common/ItemInfo'
import {StackNavigator} from 'react-navigation'
import {MapView, MapTypes, MapModule, Geolocation} from 'react-native-baidu-map'
import UserInfo from './nearmap/UserInfo'
import Config from 'react-native-config'
import SendMail from './nearmap/SendMail'

class NearMap extends React.Component {

  static navigationOptions = (navigation, screenProps) => {
    return ({
      headerStyle: {height: 0, overflow: 'hidden'}
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 15,
      center: {
        longitude: 110.746761,
        latitude: 32.658026
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      marker: {
        longitude: 110.746761,
        latitude: 32.658026,
        title: "MY HUAT"
      },
      nearUserList: [],
      province: '',
      city: '',
    };
    this.mapChanged = this.mapChanged.bind(this)
  }

  componentWillMount() {
    /*
     '[location]', { buildingName: null,
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   street: '黄姑山路',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   district: '西湖区',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   city: '杭州市',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   latitude: 30.281463,
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   altitude: 5e-324,
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   buildingId: null,
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   radius: 68.37647247314453,
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   province: '浙江省',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   direction: -1,
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   address: '中国浙江省杭州市西湖区黄姑山路27号',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   countryCode: '0',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   streetNumber: '27号',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   longitude: 120.140038,
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   country: '中国',
     05-15 22:25:57.344 23518 31472 I ReactNativeJS:   cityCode: '179' }
     */
    Geolocation.getCurrentPosition()
      .then(location => {
        this.setState({
          province: location.province,
          city: location.city,
        })
        return fetch(Config.API_URL + '/nears?city=' + location.city)
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          ToastAndroid.show(res.data.count + '个' + res.reason, ToastAndroid.SHORT)
          this.setState({
            nearUserList: res.data.userList
          })
        } else {
          ToastAndroid.show(res.reason, ToastAndroid.SHORT)
        }
      })
  }

  /*
   [arg]', { overlook: 0,
   05-15 23:56:19.018 31640  6244 I ReactNativeJS:   zoom: 15,
   05-15 23:56:19.018 31640  6244 I ReactNativeJS:   target: { longitude: 120.1413890695404, latitude: 30.275556786507487 } }

   */
  mapChanged(arg) {
    Geolocation.reverseGeoCode(arg.target.latitude, arg.target.longitude)
      .then(location => {
        console.log(location)
        if (location.cityCode !== this.state.cityCode) {
          this.setState({
            province: location.province,
            city: location.city
          })
          return fetch(Config.API_URL + '/near?cityCode=' + location.cityCode)
        }
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          ToastAndroid.show(res.data.count + '个' + res.reason, ToastAndroid.SHORT)
          this.setState({
            nearUserList: res.data.userList
          })
        }
      })
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Grid containerStyle={styles.container}>
        <Row size={1}>
          <MapView
            trafficEnabled={this.state.trafficEnabled}
            baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
            zoom={this.state.zoom}
            mapType={this.state.mapType}
            center={this.state.center}
            marker={this.state.marker}
            style={styles.map}
            onMarkerClick={(e) => {
              console.warn(JSON.stringify(e));
            }}
            onMapStatusChangeFinish={this.mapChanged}
            onMapLoaded={() => {
              Geolocation.getCurrentPosition()
                .then(location => {
                  this.setState({
                    center: {
                      longitude: location.longitude,
                      latitude: location.latitude
                    },
                  })
                })

            }}
            onMapClick={(e) => {
            }}
          >
          </MapView>
        </Row>
        <Text style={{
          fontSize: 12,
          color: '#999',
          backgroundColor: '#F3F3F3',
          padding: 10
        }}>在{ this.state.province + ' ' + this.state.city}的校友</Text>
        <Row size={1}>
          <ScrollView>
            <ListInfo>
              {
                this.state.nearUserList.map((cv, i) => (
                  <ItemInfo key={i} title={cv.name } onPress={() => {
                    this.props.screenProps.hiddenBar()
                    return navigate('UserInfo', {name: cv.name, lastLogin: cv.lastLogin, email: cv.email})
                  }} rightTitle={cv.lastLogin}/>
                ))
              }
            </ListInfo>
          </ScrollView>
        </Row>
      </Grid>
    )
  }
}


const styles = StyleSheet.create({
  container: {},
  map: {
    width: Dimensions.get('window').width,
  }
})

export default StackNavigator({
  NearMap: {
    screen: NearMap
  },
  UserInfo: {
    screen: UserInfo
  },
  SendMail: {
    screen: SendMail
  }
})