
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Constants } from 'expo';
import {
  Content,
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

import { Logginguser, getcourses,Autherized } from '../redux/action';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import React, { Component } from "react";


class signin extends React.Component {
  constructor() {
    super();
    this.pressed = this.pressed.bind(this);
    this.state = {
      ID: '',
      password: '',
    };
  }
componentWillMount(){

}
  pressed = () => {

    if (this.state.ID != '' && this.state.password !=''){
      this.props.Logginguser(this.state.ID, this.state.password);


      // firebase.database().ref('/users/'+ ID ).on('value', (ID) => {
      //   const userObj = ID.val();
      //   console.log(ID);
      // });
    }


    else
      alert("you are smart but not enough");

  };
  render() {
    return (

        <Container style={styles.container}>
        {this.props.userid?   this.props.navigation.navigate('Home'):this.props.navigation.navigate('Signin')}
          <ImageBackground
            source={require('../signbackground.jpg')}
            style={{ width: '100%', height: '100%' }}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.cent}>

              <Image source={require('../logo10.png')} style={styles.img} />
            </View>
            <ScrollView>
              <View style={styles.formView}>
                <Form style={styles.container}>
                  <FormItem floatingLabel>
                    <Label style={{ fontWeight: 'white' }}>Student ID</Label>
                    <Input onChangeText={(ID)=>this.setState({ID})}  />
                  </FormItem>

                  <FormItem floatingLabel>
                    <Label style={{ fontWeight: 'white' }}>Password</Label>
                    <Input  secureTextEntry={true} onChangeText={(password)=>this.setState({password})} />
                  </FormItem>
                  <View style={styles.loginButtonView}>
                    <Button
                      style={styles.loginButton}
                      full
                      block
                      info
                      onPress={() => this.pressed()}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Login
                      </Text>
                    </Button>

                    <Button
                      style={styles.loginButton}
                      full
                      block
                      info
                      onPress={() => this.props.navigation.navigate('Signup')}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Sign Up
                      </Text>
                    </Button>
                  </View>
                </Form>
              </View>
            </ScrollView>
            </KeyboardAvoidingView>
          </ImageBackground>
        </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  formView: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    position: 'relative',
    right: 10,
    bottom: 40,
  },
  img: {
    marginTop: 20,
    width: 180,
    height: 220,
  },
  cent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  loginButton: {
    flex: 1,
    marginTop: 15,
    borderRadius: 3,
    opacity: 0.9,
    borderColor: 'white',
    backgroundColor: '#396388',
  },
  loginButtonView: {
    flex: 1,
    padding: 20,
  },
});
const mapstatetoprops = state => {
console.log(state.auth.user);
  return {
    userid: state.auth.user.userID,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
export default connect(
  mapstatetoprops,
  { Logginguser }
)(signin);
