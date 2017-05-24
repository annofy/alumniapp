import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight, ToastAndroid
} from 'react-native'
import {
  SearchBar,
  Grid,
  Row,
  Icon
} from 'react-native-elements'
import Config from 'react-native-config'

import ListInfo from '../../common/ListInfo'
import ItemInfo from '../../common/ItemInfo'

export default class Teachers extends React.Component {
  /*
   { navigation:
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:    { dispatch: [Function],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      state:
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:       { params: { typeId: 1 },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:         key: 'id-1494516041742-0',
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:         routeName: 'TopicList' },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      goBack: [Function: goBack],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      navigate: [Function: navigate],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      setParams: [Function: setParams] },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:   screenProps:{ hiddenBar: [Function: proxiedMethod],
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:      showBar: [Function: proxiedMethod] },
   05-11 23:20:51.668  4025  7060 I ReactNativeJS:   navigationOptions: {} }
   */
  static navigationOptions({navigation, screenProps}) {
    return ({
      title: '我的老师',
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
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      teachers: [],
      pageIndex: 0,
      pageCount: 0
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData(query) {
    console.log(query)
    fetch(`${Config.API_URL}/teacher`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        start: this.state.pageIndex,
        query: query || ''
      })
    }).then(res => res.json())
      .then(res => {
        ToastAndroid.show(`加载了${res.data.count}数据`, ToastAndroid.SHORT)
        this.setState({
          teachers: query ? res.data.teachers : this.state.teachers.concat(res.data.teachers),
          pageCount: res.data.pageCount
        })
      })
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Grid>
        <Row>
          <ScrollView>
            <SearchBar
              lightTheme
              clearIcon
              onChangeText={text => {
                console.log(text, 'text')
                this.fetchData(text)
              }}
              containerStyle={styles.search}
              inputStyle={styles.searchInput}
              textInputRef="search"
              icon={{style: styles.icon}}
              placeholder='选个主题搜索一下'/>
            <ListInfo>
              {
                this.state.teachers.map(cv => (
                  <ItemInfo key={cv._id} title={cv.name} subtitle={cv.phone}
                            onPress={() => navigate('TopicDetail', {tid: cv.id})}/>
                ))
              }
            </ListInfo>
            <TouchableHighlight underlayColor="transparent" onPress={() => {
              console.log('[page]', this.state.pageCount)
              this.setState({
                pageIndex: this.state.pageIndex + 1
              }, () => {
                if (this.state.pageIndex < this.state.pageCount) {
                  this.fetchData()
                } else {
                  ToastAndroid.show('没有更多内容了', ToastAndroid.SHORT);
                }
              })
            }}>
              <Text style={{alignSelf: 'center', color: '#444', fontSize: 14, margin: 20}}>----加载更多----</Text>
            </TouchableHighlight>
          </ScrollView>

        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    height: 46,
    marginBottom: 4
  },
  searchInput: {
    height: 36,
    marginBottom: 4
  },
  icon: {
    marginTop: -4
  },
  btnBack: {
    backgroundColor: 'transparent',
  }
})