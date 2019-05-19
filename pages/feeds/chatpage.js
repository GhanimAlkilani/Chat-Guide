import React from 'react';
import {
  Text,
  Body,
  Left,
  Right,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';

class chatpage extends React.Component {
  render() {
    return (
        <ListItem avatar  onPress={ _ => this.props.nav.navigate('Chatpage',this.props.name)}>
          <Left>
            <Thumbnail source={require('../IT.png')} />
          </Left>
          <Body>
            <Text>{this.props.name}</Text>
          </Body>
          <Right>
            <Text note> {' '} </Text>
          </Right>
        </ListItem>
    );
  }
}
export default chatpage;
