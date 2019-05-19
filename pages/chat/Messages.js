import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  Content,
  Header,
  Button,
  Text,
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
  ScrollableTab
} from 'native-base';

import Message from './message'


class Messages extends React.Component {
  render() {
    return (
<Content style={{flex: 1}}>
              
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />

              </Content>    );
  }
}
export default Messages;
