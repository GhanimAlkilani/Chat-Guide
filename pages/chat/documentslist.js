import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Thumbnail,
  Body,
  Right,
} from 'native-base';

class Documentslist extends Component {
  render() {
    return (
      <Content>
        <List>

          <ListItem
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              <Icon style={{color:'red'}} active name="document" />
              {' PDF   '}
            </Text>
            <Text>Midterm</Text>
            <Text note>02/02/1998</Text>
          </ListItem>
           <ListItem
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              <Icon style={{color:'blue'}} active name="document" />
              {' word   '}
            </Text>
            <Text>Midterm</Text>
            <Text note>02/02/1998</Text>
          </ListItem>

 <ListItem
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              <Icon style={{color:'orange'}} active name="document" />
              {' power point'}
            </Text>
            <Text>Midterm</Text>
            <Text note>02/02/1998</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default Documentslist;
