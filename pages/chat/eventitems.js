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
    name: 'Midterm 1',
    date: '02/01/2018',
    time: '8:43 am',
  },
  {
    name: 'Quiz          ',
    date: '20/01/2018',
    time: '12:43 am',
  },
  {
    name: 'Midterm 2',
    date: '02/01/2018',
    time: '8:43 pm',
  },
  {
    name: 'Homework',
    date: '09/01/2018',
    time: '8:00 am',
  },
];

class EventItems extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
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
            <ListItem style={{  flexDirection: 'row',justifyContent: "space-between" }}>
              <Text>{data.name}</Text>
              <Text>{data.date}</Text>
              <Text>{data.time}</Text>
            </ListItem>
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

export default EventItems;
