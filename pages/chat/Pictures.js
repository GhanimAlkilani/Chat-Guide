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
  ScrollableTab,
} from 'native-base';

class Pictures extends React.Component {
  render() {
    return (
      <Content>
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
      </Content>
    );
  }
}
export default Pictures;
