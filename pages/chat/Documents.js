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

import Docs from './documentslist';

class message extends React.Component {
  render() {
    return (
      <Content>
        <Docs name="document" />
      </Content>
    );
  }
}
export default message;
