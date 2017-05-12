import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'

import {
  Grid,
  Row
} from 'react-native-elements'

import ListInfo from '../common/ListInfo'
import ItemInfo from '../common/ItemInfo'
import {
  StackNavigator
} from 'react-navigation'

import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map'

import UserInfo from './nearmap/UserInfo'

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
      markers: [{
        longitude: 110.746761,
        latitude: 32.658026,
        title: "Window of the world"
      }],
      nearUserList: [
        { name: 'zhengsan', lastLogin: '2015-02-23' },
        { name: 'wangwu', lastLogin: '2015-02-23' },
        { name: 'liliu', lastLogin: '2015-02-23' },
        { name: 'dls', lastLogin: '2015-02-23' },
        { name: 'nnn', lastLogin: '2015-02-23' },
        { name: 'mmmm', lastLogin: '2015-02-23' },
        { name: 'we', lastLogin: '2015-02-23' },
        { name: 'werw', lastLogin: '2015-02-23' },
        { name: 'uiowe', lastLogin: '2015-02-23' },
        { name: 'awaqw', lastLogin: '2015-02-23' },
        { name: 'ldfkd', lastLogin: '2015-02-23' },
      ]
    };
  }

  componentWillMount() {
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
            markers={this.state.markers}
            style={styles.map}
            onMarkerClick={(e) => {
              console.warn(JSON.stringify(e));
            }}
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
        <Text style={{ fontSize: 12, color: '#999', backgroundColor: '#F3F3F3', padding: 10 }}>当前区域的校友</Text>
        <Row size={1}>
          <ScrollView>
            <ListInfo>
              {
                this.state.nearUserList.map((cv, i) => (
                  <ItemInfo  key={i} title={cv.name } onPress={() => {
                    this.props.screenProps.hiddenBar()
                    return navigate('UserInfo', { name: cv.name, lastLogin: cv.lastLogin})
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
  container: {
  },
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
  }
})