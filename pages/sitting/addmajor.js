import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {
  Modal,
  View,
  ListView,
  picked2,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import { Picker, Content, Button, Icon, Left, Container } from 'native-base';
import styles from './styles';

class Addmajor extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      visible: false,
      picked2: 'Major',
      placeholder: 'select',
    };
  }




  render() {
    const { visible, picked2 } = this.state;

    const Majors = [
      {
        key: 'SWE: Software Engineering',
        label: 'SWE: Software Engineering',
      },
      {
        key: 'IS: Information Systems',
        label: 'IS: Information Systems',
      },
      {
        key: 'CE: Computer Engineering',
        label: 'CE: Computer Engineering',
      },
      {
        key: 'CS Computer Science',
        label: 'CS Computer Science',
      },
      {
        key: 'IT: Information Technology',
        label: 'IT: Information Technology',
      },
    ];

    return (
      <Button
        style={{
          marginTop: 15,
          marginHorizontal: 10,
          borderBottomColor: '#cccccc',
          borderBottomWidth: 1,
        }}
        full
        transparent
        onPress={() => {
          this.onShow();
        }}>
        <Left>
          <Text style={{ fontSize: 20,color:'#737373' }}>{picked2}</Text>
        </Left>
        <ModalFilterPicker
          visible={visible}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
          options={Majors}
        />
      </Button>
    );
  }

  onShow = () => {
    this.setState({ visible: true });
  };

  onSelect = picked2 => {

    this.setState({
      picked2: picked2,
      visible: false,
    });
    this.props.add(picked2);
  };

  onCancel = () => {
    this.setState({
      visible: false,
    });
  };
}

export default Addmajor;
