import React, { Component } from 'react';

import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
//pages
import drawernav from './feeds/feeds';
import Signin from './signin/signin';
import Signup from './signin/signup';
import Selectcourse from './sitting/addingcourses';
import Chatpage from './chat/chat';
import Settings from './sitting/sitting';
import Info from './chat/pageinfo';

import Pictures from './chat/Pictures'
import Documents from './chat/Documents'
import Messages from './chat/Messages'

const Media = createMaterialTopTabNavigator({
  Pictures: {
    screen: Pictures,
    navigationOptions: {
      tabBarLabel: 'Images'
    }
  },
  Documents: {
    screen: Documents,
    navigationOptions: {
      tabBarLabel: 'Documents'
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: 'Messages'
    }
  }
},
{

}) 
const Route = createStackNavigator({
  Signin: {
    screen: Signin,
    navigationOptions: {
      headerVisible: false,
      header: null,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerVisible: false,
      header: null,
    },
  },
  Home: {
    screen: drawernav,
  },
  Selectcourse: {
    screen: Selectcourse,
    navigationOptions: {
      title: 'Select course',
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
  Chatpage: {
    screen: Chatpage,
  },
  Info: {
    screen: Info,
    navigationOptions: {
      title: 'Page Info',
    },
  },
  MediaTopTabNavigator: {
    screen: Media,
    navigationOptions: {
      title: 'Group Content'
    }
  }
});

export default Route;
