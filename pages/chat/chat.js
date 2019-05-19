import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Constants,ImagePicker,Permissions,Notifications } from 'expo';
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
  Input,
} from 'native-base';

import { GiftedChat } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
 import {connect} from 'react-redux';
import {sendmessage} from '../redux/action';

import firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var counter =3;
class chat extends React.Component {
  constructor(props) {
    super(props);
    title = this.props.navigation.state.params;
    this.fetchmessages = this.fetchmessages.bind(this);
    this.state = {
       messages: [
        // {
        //   _id: 1,
        //   text: 'Hello developer',
        //   createdAt: new Date(),
        //   image: 'https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202017/Magazine-Articles/April/CR-Inline-top-picks-Toyota-Yaris-02-17',
        //   user: {
        //     _id: 1,
        //     name: 'klb',
        //
        //   },
        // },
        // {
        //   _id: 2,
        //   text: 'Hello developer',
        //   createdAt: new Date(),
        //   user: {
        //     _id: 3,
        //     name: 'klb',
        //
        //   },
        // },
        // {
        //   _id: 3,
        //   text: 'hammmmmsan',
        //   createdAt: new Date(),
        //   user: {
        //     _id: 2,
        //     name: 'j7sh',
        //   },
        // }
      ],
    disabled: false,
    text: '',
    };
  }
  componentDidMount(){

  this.fetchmessages();
 }
  

 // onChooseImagePress = async () => {
 //   const permissions = Permissions.CAMERA_ROLL;
 //    const { status } = await Permissions.askAsync(permissions);
 //
 //    console.log(permissions, status);
 //    if(status === 'granted')
 //   let result = await ImagePicker.launchCameraAsync();
 //   //let result = await ImagePicker.launchImageLibraryAsync();
 //
 //   if (!result.cancelled) {
 //     this.uploadImage(result.uri, "test-image")
 //       .then(() => {
 //         Alert.alert("Success");
 //       })
 //       .catch((error) => {
 //         Alert.alert(error);
 //       });
 //   }
 // }

 _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled){
      this.uploadImage(result.uri,this.props.user.Name+counter++);
    }
}
 uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref('images').child(counter+".jpg");
    // ref.getDownloadURL().then((url) => {
    // // this.onSend(null,true,url);
    // console.log(url);})
    var gsReference = firebase.storage().refFromURL('gs://test-92dcf.appspot.com/images/36.jpg');
    console.log(gsReference);
    return ref.put(blob);

  }
  fetchmessages(){
       firebase.database().ref('messages/'+this.props.navigation.state.params).on('value',(snapshot)=>{
          const M = [];
          if(snapshot.val())
          Object.values(snapshot.val()).forEach(msg =>{
            mesg={
            _id: ++counter,
            text:this.props.user.Name==msg.sender? msg.text:<Text><Text style={{fontWeight:'bold'}}>{msg.sender +':\n'}</Text><Text>{msg.text}</Text></Text>,
            createdAt: new Date(),
            image: msg.isimage ? msg.imageurl:null,
            user: {
              _id: this.props.user.Name==msg.sender? 1:counter,
              name: msg.sender,
            }
          }
            M.unshift(mesg);
          });
          this.setState({messages : M});
        });
    };
  onSend(messages = [],isimage=false,imageurl=null) {

    firebase.database().ref('messages/' + this.props.navigation.state.params).push({text:messages[0].text?messages[0].text:'',sender:this.props.user.Name,isimage:isimage,imageurl:imageurl});

    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, messages),
    // }))
  }

  static navigationOptions = ({ navigation }) => ({
    // title: navigation.state.params,

    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerTitle: (
      <Button onPress={() => navigation.push('Info')} transparent>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
          {navigation.state.params}
          {'                                      '}
        </Text>
      </Button>
    ),
    headerRight: (
      <Button onPress={() => navigation.push('Info')} transparent>
        <Text>{'               '}</Text>
      </Button>
    ),
  });



  render() {
    return (
      <View style={{flex:1}}>

        <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        // isAnimated={true}
        renderAvatar={() => null}
        user={{
          _id: 1,
          name: this.props.user.Name,
        }}
      />
      
      <Button
      onPress={this._pickImage} full block info><Text>upload Image</Text></Button>
      {Platform.OS === 'android' ? <KeyboardSpacer /> : null }
       
      </View>
    );
  }
}

const mapstatetoprops = state => {

  return {
    user: state.auth.user,
  };
};
export default connect(mapstatetoprops,{ sendmessage })(chat);
