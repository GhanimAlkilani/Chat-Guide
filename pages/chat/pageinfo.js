import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import {
  Content,
  Header,
  Button,
  // Text,
  Body,
  Title,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Input,
  Thumbnail,
  Textarea,
  Form,
  Grid,
  Row,
  Col,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import { ScrollableTabView } from 'react-native-scrollable-tab-view';
import * as firebase from 'firebase';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Dialog from 'react-native-dialog';

import EventItems from './eventitems';
import Docs from './documentslist';

class pageinfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDatePickerVisible: false,
      isTimePickerVisible: false,
      datePicked: '',
      timePicked: '',

      isDialogVisible: false,
      dialogInput: 'fffffffffwww',
    };
  }

  showDialog = () => {
    this.setState({ isDialogVisible: true });
  };

  _handleCancelDialog = () => {
    this.setState({ isDialogVisible: false });
  };

  _handleSaveDialog = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ isDialogVisible: false });

    // instead of the alert, save the data for the new event
    alert(
      'title: ' +
        this.state.dialogInput +
        ' | date: ' +
        this.state.datePicked +
        ' | time: ' +
        this.state.timePicked
    );
    // var title =  this.state.dialogInput;
    // var date = this.state.datePicked;
    // var time = this.state.timePicked;

      
      firebase.database().ref('groups/swe123/pageinfo').set({
          name: this.state.dialogInput,
          date:  this.state.datePicked ,
          time: this.state.timePicked
          

      }).then((data)=>{
          //success callback
          console.log('data ' , data)
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
  
  


    // clear the state for the entered fields
    this.setState({
      dialogInput: "",
      datePicked: "",
      timePicked: ""
    })
  };

  _showDatePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleDatePicked = dateStamp => {
    // console.log('A date has been picked: ', date);
    let date = new Date(dateStamp).toISOString().slice(0, 10);

    this._hideDatePicker();
    this.setState({ datePicked: date });

    setTimeout(
      () => this.setState({ isTimePickerVisible: true }),

      500
    );
  };

  _handleTimePicked = dateStamp => {
    // console.log('A date has been picked: ', time);
    this._hideTimePicker();
    let time = new Date(dateStamp).toTimeString().slice(0, 5);
    this.setState({ timePicked: time });
    setTimeout(
      () => this.setState({ isDialogVisible: true }),

      500
    );
  };

  _addEvent = () => {
    this._showDatePicker();
  };

  render() {
    return (
      <Content>
        <Card>
          <Left>
            <Thumbnail
              style={{ marginVertical: 10 }}
              large
              source={require('../IT.png')}
            />
          </Left>
          <Body>
            <TouchableOpacity style={{ marginVertical: 10 }}>
              <Text>{'Write description here'}</Text>
            </TouchableOpacity>
          </Body>
          <Right />
        </Card>
        <Card>
          <CardItem
            style={{
              borderBottomColor: '#d9d9d9',
              borderBottomWidth: 1,
            }}>
            <Body>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                Events
              </Text>
            </Body>
          </CardItem>

          <CardItem>
            <EventItems />
          </CardItem>

          <CardItem style={{ height: 50 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this._addEvent}>
              <Icon
                style={{
                  color: 'grey',
                  fontSize: 40,
                  fontWeight: 'bold',
                }}
                name="add"
              />
            </TouchableOpacity>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            style={{
              borderBottomColor: '#d9d9d9',
              borderBottomWidth: 1,
            }}>
            <Body>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                Group Contents
              </Text>
            </Body>
          </CardItem>
          <TouchableOpacity
            style={{
              width: '100%',
              paddingVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#ddd',
            }}
            onPress={() =>
              this.props.navigation.navigate('MediaTopTabNavigator')
            }>
            <Text>View Group Content</Text>
          </TouchableOpacity>
        </Card>
        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={date => this._handleDatePicked(date)}
          onCancel={() => this._hideDatePicker()}
        />
        <DateTimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={time => this._handleTimePicked(time)}
          onCancel={() => this._hideTimePicker()}
          mode={'time'}
        />
        <Dialog.Container visible={this.state.isDialogVisible}>
          <Dialog.Title>
            <Text>Event Title</Text>
          </Dialog.Title>
          <Dialog.Description>
            <Text>Enter a title for this event!</Text>
          </Dialog.Description>
          <Dialog.Input
            onChangeText={text => this.setState({ dialogInput: text })}
          />

          <Dialog.Button label="Cancel" onPress={this._handleCancelDialog} />
          <Dialog.Button label="Save" onPress={this._handleSaveDialog} />
        </Dialog.Container>
      </Content>
    );
  }
}
const Tabz = props => (
  <Tabs>
    <Tab heading="Photos/videos">
      <ScrollView style={{ height: 300 }}>
        <Grid>
          <Row>
            <Col
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={() => this}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={() => this}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={() => this}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={() => this}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={() => this}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={() => this}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
            <Col
              onPress={() => this}
              style={{
                flex: 3,
                borderWidth: 2,
                borderColor: 'white',
              }}>
              <Image
                source={require('../bcg.jpg')}
                style={{ height: 120, width: 120 }}
              />
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    </Tab>
    <Tab heading="Documents">
      <Docs name="document" />
    </Tab>
    <Tab heading="Mesasges">
      <View style={{ height: 300 }}>
        <Content style={{ flex: 1 }}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </Content>
      </View>
    </Tab>
  </Tabs>
);
const Message = props => (
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
export default pageinfo;
