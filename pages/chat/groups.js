import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Container,
  Text,
  Left,
  Thumbnail,
  Body,
  Right,
 
} from 'native-base';
import * as firebase from 'firebase';

  //when student sign in, ID will pass to here then will retrive groupName
  // and will set ID in Students array which contains the students of this group

   class group extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
          groupName:'' ,
          students:[] ,
          date:'',
          eventName:'',
          eventDate:'',
          eventTime:'',
          message:'',
          ID:''
        };
    }

     
        readUserData( ) {
            firebase.database().ref('students/435108342/groups').once('value', function (snapshot) {
                console.log(snapshot.val())
            });
        }
    

    render() {
      return (
          <Container>
              <Button 
              onPress={ () => this.readUserData(this.state.ID)}>
              <Text>Hello</Text>
              </Button> 
              </Container>

         
      );
    }
  }export default group;