import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableHighlight} from 'react-native'
import {
  Divider, Icon
} from 'react-native-elements'
import Config from 'react-native-config'
import Comments from '../../common/Comments'
import ToolBar from "../../common/ToolBar";


export default class NewsInfo extends React.Component {

  /*
   '[navigation]', { navigation:
   { dispatch: [Function],
   state:
   { params: { id: '我校得到教育部资金10亿用来建设学校' },
   key: 'id-1494164128452-6',
   routeName: 'NewsInfo' },
   goBack: [Function: goBack],
   navigate: [Function: navigate],
   setParams: [Function: setParams] },
   screenProps: {},
   navigationOptions: {} }
   */
  static navigationOptions({navigation, screenProps}) {
    return ({
      title: '新闻详情',
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
      article: {
        author: [],
        uris: [],
      },
      comments: [
        {
          from: {name: 'zheng'},
          to: {name: 'li'},
          content: "我想去,你想去吗?",
          meta: {
            createAt: '2017-05-18 20:30'
          }
        },
        {
          from: {name: 'li'},
          to: {name: 'zheng'},
          content: "学校真是越来越牛逼了啊.",
          meta: {
            createAt: '2017-05-18 20:30',
          }
        },
        {
          from: {name: 'zhengsan '},
          to: {name: 'lisi'},
          content: '看了这篇文章心里很激动',
          meta: {
            createAt: '2017-05-18 20:30',
          }
        },
        {
          from: {name: '王五'},
          to: {name: 'lisi'},
          content: '看了这篇文章心里很激动',
          meta: {
            createAt: '2017-05-18 20:30',
          }
        }
      ]
    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state
    fetch(Config.API_URL + '/newslist/' + params.id + '?hash=' + params.hash)
      .then(res => res.json())
      .then(res => {
        if(res.success) {
          console.log(res, 'res')
          this.setState({
            article: res.data
          })
        }
      })

  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={ styles.article }>
        <Text style={styles.title}>{ params.title }</Text>
        <Text style={styles.subtitle}>发布时间: {this.state.article.time}</Text>
        <Text style={styles.subtitle}>作者:{this.state.article.author.join(' ')}</Text>
        <Divider style={styles.divide}/>
        <ScrollView style={{ marginBottom: 50}}>
          <View style={{marginBottom: 20}}>
            {
              this.state.article.uris.map((uri, index) => <Image source={{ uri: uri}} key={index} style={{ width: Dimensions.width, height: 150, marginTop: 10}}/>)
            }
            <Text style={styles.content}>
              {this.state.article.content}
            </Text>
          </View>
          <ToolBar url={params.url} title={params.title}/>
          <Comments id={this.state.article.tid} comments={this.state.comments}/>
        </ScrollView>
        <TouchableHighlight underlayColor="transparent" onPress={() => {

        }}>
          <Text style={{alignSelf: 'center', color: '#ccc', fontSize: 14 }}>{this.state.loadingText}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  article: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 4
  },
  title: {
    fontSize: 16,
    color: '#222',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 12
  },
  divide: {
    backgroundColor: '#999',
    marginTop: 10,
    width: '90%',
    marginBottom: 20
  },
  content: {
    color: '#444',
  }
})