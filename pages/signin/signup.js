import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Child
} from 'react-native';
import {
  Container,
  Content,
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
import * as firebase from 'firebase';
import { Signup } from '../redux/action';
import { connect } from 'react-redux';

const config = {
  apiKey: 'AIzaSyBJxHzDnE4qz98qbwkDhpk5OnnXG8PgY',
  authDomain: 'test-9dcf.firebaseapp.com',
  databaseURL: 'https://test-92dcf.firebaseio.com',
  projectId: 'test-92dcf',
  storageBucket: 'test-92dcf.appspot.com',
  messagingSenderId: '111128456951',
}; firebase.initializeApp(config);
import Group from '../chat/groups';
import AddMajor from '../sitting/addmajor';
class signup extends React.Component {
  constructor(props) {
    super(props);
    this.addmajor= this.addmajor.bind(this);
    this.state = {
      ID: '',
      name: '',
      password: '',
      confirmPassword: '',
      Major: '',
      groups:[]
    };

  }


  puplish(ID, name, password,Major) {
    if (this.state.password != this.state.confirmPassword) {
      alert ("error confirm password")
    }
    else{
    //this.sendinfo(ID, name, password, Major );
    this.props.Signup(ID, password, name, Major,this.state.groups  );
    }
  }
addmajor(picked){
  this.setState({Major:picked})
  console.log(this.state.Major)
}
  render() {
    return (


      <Container style={styles.container}>
        <ImageBackground
          source={require('../signbackground.jpg')}
          style={{ width: '100%', height: '100%' }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.cent}>

            </View>
            <ScrollView>
              <View style={styles.formView}>
                <Form style={styles.container}>
                  <FormItem floatingLabel>
                    <Label>Student ID</Label>
                    <Input onChangeText={(ID) => this.setState({ ID })}

                    />
                  </FormItem>



                  <FormItem floatingLabel>
                    <Label>Student name</Label>
                    <Input onChangeText={(name) => this.setState({ name })} />
                  </FormItem>

                  <FormItem floatingLabel>
                    <Label>Password</Label>
                    <Input autoCorrect={false}
                      autoCapitalize="none"
                      secureTextEntry={true}
                      onChangeText={(password) => this.setState({ password })}
                    />
                  </FormItem>
                  <FormItem floatingLabel>
                    <Label>Confirm Password</Label>
                    <Input
                    autoCapitalize="none"
                    secureTextEntry={true}
                      onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        />
                  </FormItem>








                  <AddMajor
                  add={this.addmajor}
                  />
                  <View style={styles.loginButtonView}>
                    <Button
                      onPress={
                        () => this.puplish(this.state.ID,this.state.name, this.state.password,this.state.Major)
                      }
                      //onPress={() => this.sendinfo(this.state.ID, this.state.name)}
                      style={styles.loginButton} full block info>

                      <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Sign Up
                      </Text>

                    </Button>
                  </View>
                </Form>
              </View>
              <Group/>
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

    width: 180,
    height: 180,
  },
  cent: {
    marginTop: 120,
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

  return {
    userid: state.auth.user.userID,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
export default connect(
  mapstatetoprops,
  { Signup }
)(signup);
