import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class message extends React.Component {
  render() {
    return (
      <View
        style={{
          margin: 7,
          marginRight: '30%',
          borderRadius: 10,
          padding: 9,
          backgroundColor: '#03ff96',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 17,
            color: '#0f0f0f',
          }}>
          {'item.sender'}{' '}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: '#0f0f0f',
          }}>
          {
            'hkfbdsvbkdbsdbsdvklsfdv \ndsbhdbfksbdfkdsbfbdskfbsdkf\ndkhfbdshfsdfsdjhfvhkfbdsvbkdbsdbsdvklsfdv \n dsbhdbfksbdfkdsbfbdskfbsdkf\ndkhfbdshfsdfsdjhfv'
          }{' '}
        </Text>
      </View>
    );
  }
}
export default message;
