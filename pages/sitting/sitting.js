import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import {
  Content,
  Header,
  Button,
  Text,
  Body,
  Title,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';
import Collapsible from 'react-native-collapsible';
import Dialog from 'react-native-dialog';


import { Signoutuser } from '../redux/action';
import { connect } from 'react-redux';


class sitting extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      iscollapsed: true,

      name: '',
      password: '',
      confirmPassword: '',
      reportedIssue: '',

      isNameVisible: false,
      isPasswordVisible: false,
      isReportIssueVisible: false,
    };
  }

  _showNameDialog = () => {
    this.setState({ isNameVisible: true });
  };

  _showPasswordDialog = () => {
    this.setState({ isPasswordVisible: true });
  };

  _showReportIssueDialog = () => {
    this.setState({ isReportIssueVisible: true });
  };

  _handleCancelDialog = () => {
    this.setState({
      isNameVisible: false,
      isPasswordVisible: false,
      isReportIssueVisible: false,
    });
  };

  _handleSaveNameDialog = () => {
    this.setState({ isNameVisible: false });

    // save the name to backend instead of alert
    alert('name: ' + this.state.name);

    this.setState({ name: '' });
  };

  _handleSavePasswordDialog = () => {
    this.setState({ isPasswordVisible: false });

    if (this.state.password == this.state.confirmPassword)
      // save the name to backend instead of alert
      alert('passwords are fine: ' + this.state.password);
    else alert("passwords don't match");

    this.setState({ password: '', confirmPassword: '' });
  };

  _handleSaveReportIssueDialog = () => {
    this.setState({ isReportIssueVisible: false });

    // save the name to backend instead of alert
    alert('issue: ' + this.state.reportedIssue);

    this.setState({ reportedIssue: '' });
  };

  render() {
    return (
      <Content>
        <Card>
          <Left>
            <Thumbnail
              style={{ marginVertical: 10 }}
              large
              source={require('../download.png')}
            />
          </Left>
          <Body>
            <View>
              <Text style={styles.txt}>{this.props.user.Name}</Text>
            </View>
          </Body>
          <Right />
        </Card>
        <Card>
          <CardItem style={styles.crditm}>
            <TouchableOpacity
              onPress={() =>
                this.setState({ iscollapsed: !this.state.iscollapsed })
              }
              style={{ width: '100%' }}>
              <Text style={[{ fontWeight: 'bold' }, styles.txt]}>
                Edit profile
              </Text>
            </TouchableOpacity>
          </CardItem>
          <Collapsible collapsed={this.state.iscollapsed}>
            <CardItem style={styles.crditm}>
              <TouchableOpacity onPress={this._showNameDialog}>
                <Text style={styles.txt}>Name</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem style={styles.crditm}>
              <TouchableOpacity onPress={this._showPasswordDialog}>
                <Text style={styles.txt}>Password</Text>
              </TouchableOpacity>
            </CardItem>
          </Collapsible>
        </Card>
        <Card>
          <CardItem style={styles.crditm}>
            <TouchableOpacity onPress={this._showReportIssueDialog}>
              <Text style={styles.txt}>Report Issue</Text>
            </TouchableOpacity>
          </CardItem>
          <CardItem>
            <Text style={styles.txt}>About the App</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Text
            onPress={
              ()=>{
                this.props.Signoutuser()
                this.props.navigation.navigate('Signin')
            }} style={styles.txt}>Sign Out</Text>
          </CardItem>
        </Card>

        <Dialog.Container visible={this.state.isNameVisible}>
          <Dialog.Title>
            <Text>Change Name</Text>
          </Dialog.Title>
          <Dialog.Description>
            <Text>Enter A New Name:</Text>
          </Dialog.Description>
          <Dialog.Input onChangeText={name => this.setState({ name })} />

          <Dialog.Button label="Cancel" onPress={this._handleCancelDialog} />
          <Dialog.Button label="Save" onPress={this._handleSaveNameDialog} />
        </Dialog.Container>

        <Dialog.Container visible={this.state.isPasswordVisible}>
          <Dialog.Title>
            <Text>Change Password</Text>
          </Dialog.Title>
          <Dialog.Description>
            <Text>Enter the new password in both fields</Text>
          </Dialog.Description>
          <Dialog.Input
            onChangeText={password => this.setState({ password })}
            placeholder={"Password"}
            secureTextEntry
          />
          <Dialog.Input
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            placeholder={"Confirm Password"}
            secureTextEntry
          />

          <Dialog.Button label="Cancel" onPress={this._handleCancelDialog} />
          <Dialog.Button label="Save" onPress={this._handleSavePasswordDialog} />
        </Dialog.Container>

        <Dialog.Container visible={this.state.isReportIssueVisible}>
          <Dialog.Title>
            <Text>Report an Isssue</Text>
          </Dialog.Title>
          <Dialog.Description>
            <Text>Enter the Issue to report it</Text>
          </Dialog.Description>
          <Dialog.Input
            onChangeText={reportedIssue => this.setState({ reportedIssue })}
          />

          <Dialog.Button label="Cancel" onPress={this._handleCancelDialog} />
          <Dialog.Button label="Save" onPress={this._handleSaveReportIssueDialog} />
        </Dialog.Container>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  crditm: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  txt: {
    fontSize: 20,
  },
});
const mapstatetoprops = state => {
  return {
    user:state.auth.user,
  };
};
export default connect(
  mapstatetoprops,
  { Signoutuser}
)(sitting);
