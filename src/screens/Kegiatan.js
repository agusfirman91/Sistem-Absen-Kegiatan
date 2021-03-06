import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Button } from 'react-native';
import { ListItem, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default class Kegiatan extends Component {
  constructor(props) {
    prefix_api = 'http://mobile.aguswahyu.com/uas/';
    super(props)
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this._loadlist();
      }
    );
  }

  _loadlist = () => {
    axios.get(prefix_api + 'read_listkegiatan.php')
      .then(res => {
        const list = res.data;
        console.log(list);
        this.setState({ list });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.nama}
      subtitle={item.id}
      onPress={
        () => {
          this.props.navigation.navigate('DetailKegiatan', { id_kegiatan: item.id, nama_kegiatan: item.nama })
        }
      }
      containerStyle={{
        borderTopWidth: 1,
      }}
      titleStyle={{
        color: '#000'
      }}
    />
  )
  render() {
    // const username = this.props.navigation.state.params.username;

    return (
      <View style={styles.container} >
        <Header
          centerComponent={{ text: "List Kegiatan", style: { color: '#fff', fontSize: 24 } }}
          containerStyle={{
            backgroundColor: '#454C59',
            shadowOpacity: 0,
          }}
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ margin: 20 }}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.list}
              renderItem={this.renderItem}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});