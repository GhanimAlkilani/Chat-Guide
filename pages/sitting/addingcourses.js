import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {
  Modal,
  View,
  ListView,
  picked,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import {
  Picker,
  Content,
  Button,
  Icon,
  Container,
  List,
  ListItem,
} from 'native-base';
import styles from './styles';

import { Fetch,addcourses } from '../redux/action';
import { connect } from 'react-redux';

class addingcourses extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.Pickedcousre = this.Pickedcousre.bind();
    this.state = {
      visible: false,
      picked: '',
      placeholder: 'select',
      Major: this.props.courses ? this.props.courses : [],
      Chosencourses: [],
    };
  }
  componentWillMount() {
    this.props.Fetch();
  }
  Pickedcousre = pickecourse => {
    this.setState({ Major: pickecourse });
    this.ChooseCourse();
  };
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.Chosencourses];
    newData.splice(rowId, 1);
    this.setState({ Chosencourses: newData });
  }
  submit(){
    console.log('ssssggfgfgfgfgfsssssssssss');
    this.props.addcourses(this.props.user,this.state.Chosencourses);
  }
  render() {
    const { visible, picked } = this.state;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    return (
      <Container>
        <Button
          style={{ marginTop: 10, marginHorizontal: 10 }}
          full
          bordered
          rounded
          info
          onPress={() => {
            this.setState({ visible: true });
          }}>
          <Text style={{ textAlign: 'center' }}>Select Course:</Text>
        </Button>
        <ModalFilterPicker
          visible={visible}
          onSelect={this.onSelectCourses}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          options={this.props.courses}
        />
        <Text style={{ margin: 10, fontSize: 20, fontWeight: 'bold' }}>
          Chosencourses:{' '}
        </Text>
        <List
          rightOpenValue={-75}
          dataSource={this.ds.cloneWithRows(this.state.Chosencourses)}
          renderRow={data => (
            <ListItem>
              <Text style={{ margin: 10, fontSize: 27 }}>{data}</Text>
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
        <Button
        onPress={() => this.submit()}
        style={{ margin: 20, marginHorizontal: 10 }}  full info rounded>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            submit Courses
          </Text>
        </Button>
      </Container>
    );
  }
  onSelectCourses = picked => {
    this.setState({
      picked: picked,
      Chosencourses: this.state.Chosencourses.some(item => picked === item)
        ? this.state.Chosencourses
        : this.state.Chosencourses.concat(picked),
      visible: false,
    });
  };
}
const mapstatetoprops = state => {
  return {
    user:state.auth.user,
    major: state.auth.user.major,
    courses: state.auth.fetchcourses,
  };
};
export default connect(
  mapstatetoprops,
  { Fetch,addcourses }
)(addingcourses);
