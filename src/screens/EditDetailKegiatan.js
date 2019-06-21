import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class EditDetailKegiatan extends Component {
  constructor(props) {
    prefix_api = 'http://mobile.aguswahyu.com/uas/';
    super(props)
    this.state = {
      list: []
    };
  }
  
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}