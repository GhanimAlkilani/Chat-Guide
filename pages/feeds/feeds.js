import React from 'react';
import { StyleSheet, View, I18nManager, ImageBackground } from 'react-native';
import { Constants } from 'expo';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Title,
  Left,
  Right,
  Icon,
  List,
  ListItem,
  Thumbnail,
  Content,
} from 'native-base';
import {  Permissions,Notifications } from 'expo';
import { connect } from 'react-redux';
import Chatpages from './chatpages';
import * as firebase from 'firebase';



class feeds extends React.Component {

  constructor(){
     super();

   };
   registerForPushNotification = async ()=> {
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;
    //if there is no permission yet, ask user
    if(status!=='granted'){
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus =status;
    }
    //if no permission exit the function
    if(finalStatus!=='granted'){
  return;
    }
    //Get push notification token..
    let token = await Notifications.getExpoPushTokenAsync();
    console.log("this is token"+token);
    
    //Add token to firebase
    console.log(this.props.user.userID);
     let uid = this.props.user.userID;
     console.log('fucker:  '+uid);
     firebase.database().ref('students/'+uid).update({
     expoPushToken: token
      });
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerStyle: {
      alignContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    headerLeft: (
      <Icon
        onPress={() => navigation.push('Settings')}
        style={{ color: 'black', fontSize: 35, marginHorizontal: 10 }}
        name="settings"
      />
    ),
    headerRight: (
      <Icon
        onPress={() => navigation.push('Selectcourse')}
        style={{ color: 'black', fontSize: 35, marginHorizontal: 10 }}
        name="add"
      />
    ),
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    gesturesEnabled: false,
    backHandler: false,
  });

  componentDidMount(){

    this.registerForPushNotification();
   }

  render() {


    return (
      <Container>
         {this.props.user.courses? <Chatpages nav={this.props.navigation} courses={this.props.user.courses} />:null}
      </Container>
    );
  }
}

const mapstatetoprops = state => {
console.log(state.auth.user)
  return {

    user: state.auth.user,
  };
};
export default connect(
  mapstatetoprops,
  { }
)(feeds);
