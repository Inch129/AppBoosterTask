import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
    Image,
    Alert
} from 'react-native';



export default class App extends Component<{}> {
     constructor(props) {
        super(props);
        this.state = {
          isLoading: true
        }
      }

      componentDidMount() {
        return fetch('https://gist.githubusercontent.com/KELiON/1e0a30bf603716875b5f717650113924/raw/7be9852a54ae29eda43d2691045586c0976ccdd5/offers.json')
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>  r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson.offers),
            }, function() {

            });
          })
          .catch((error) => {
            console.error(error);
          });
      }

      render() {
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }

        return (
          <View style={{flex: 1, paddingTop: 20, flexDirection: "row", justifyContent: 'space-between'}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text> <Image style={{width: 50, height: 100}} source={{uri: rowData.icon}}/>  {rowData.title} {rowData.reward} </Text>}
            />
          </View>
        );
      }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});