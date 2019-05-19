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
const datas = [
  {
    name: 'SWE 312',
  },
  {
    name: 'CSC 101',
  },
  {
    name: 'CHEM 101',
  },

];

import Chatpage from './chatpage';

export default class chatpage2 extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: this.props.courses,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }


  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    return (
      <Content>
        <List
          rightOpenValue={-75}
          dataSource={this.ds.cloneWithRows(this.state.listViewData)}
          renderRow={data => (
            <Chatpage
              name={data}
              nav={this.props.nav}
            />
          )}
          renderRightHiddenRow={(data, secId, rowId, rowMap) => (
            <Button
              full
              danger
              onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
              <Icon active name="trash" />
            </Button>
          )}
        />
      </Content>
    );
  }
}
