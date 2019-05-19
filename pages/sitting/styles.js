import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const optionStyle = {
  flex: 0,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#eee'
}

const optionTextStyle = {
  flex: 1,
  textAlign: 'left',
  color: '#000',
  fontSize: 22
}

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextStyle: {
    flex: 0,
    color: '#fff',
    fontSize: 20,
    marginBottom: 15
  },
  listContainer: {
    flex: 1,
    width: width * 0.8,
    maxHeight: height * 0.7,
    backgroundColor: '#fff',
    borderRadius: 0,
    marginBottom: 15
  },
  cancelContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    flex: 0,
    backgroundColor: '#999',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  cancelButtonText: {
    textAlign: 'center',
    fontSize: 18
  },
  filterTextInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#999'
  },
  filterTextInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 0,
    height: 50
  },
  categoryStyle: {
    ...optionStyle
  },
  categoryTextStyle: {
    ...optionTextStyle,
    color: '#999',
    fontStyle: 'italic',
    fontSize: 16
  },
  optionStyle: {
    ...optionStyle
  },
  optionStyleLastChild: {
    borderBottomWidth: 0
  },
  optionTextStyle: {
    ...optionTextStyle
  },
  selectedOptionStyle: {
    ...optionStyle
  },
  selectedOptionStyleLastChild: {
    borderBottomWidth: 0
  },
  selectedOptionTextStyle: {
    ...optionTextStyle,
    fontWeight: '700'
  },
  noResults: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  noResultsText: {
    flex: 1,
    textAlign: 'center',
    color: '#ccc',
    fontStyle: 'italic',
    fontSize: 22
  }
})










// import React, {Component} from 'react';
 
// import PropTypes from 'prop-types'
// import { Modal, View, ListView,picked, TouchableOpacity, Text, TextInput } from 'react-native'
// import ModalFilterPicker from 'react-native-modal-filter-picker'

// import styles from './styles'
// import { Picker , Icon} from 'native-base';


// export default class addingcourses extends  React.Component {
 
//   constructor (props, ctx) {
//     super(props, ctx);

//     this.state = {
//       selected: "key1",
//       visible: false,
//       picked: null,
//       placeholder:'select'
//     };
//   }
//   onValueChange(value: string) {
//     this.setState({
//       selected: value
//     });
//   }
//   render() {
//     const { visible } = this.state;
  
//     const options = [
//       {
//         key: 'SWE211',
//         label: 'SWE211',
//         searchKey: 'Africa',
//       },
//       {
//         key: 'SWE444',
//         label: 'SWE444',
//         searchKey: 'Africa',
//       },
//       {
//         key: 'SWE455',
//         label: 'SWE455',
//         searchKey: 'Africa',
//       },
//       {
//         key: 'SWE434',
//         label: 'SWE434',
//         searchKey: 'Asia',
//       },
//       {
//         key: 'SWE466',
//         label: 'SWE466',
//         searchKey: 'Europe',
//       },
//     ];
  
//     return (
//       <View style={styles.container}>
//       <ModalFilterPicker>
//      <Picker
//               mode="dropdown"
//               iosHeader="Select your SIM"
//               iosIcon={<Icon name="ios-arrow-down-outline" />}
//               style={{ width: undefined }}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this)}
//             >
//               <Picker.Item label="Wallet" value="key0" />
//               <Picker.Item label="ATM Card" value="key1" />
//               <Picker.Item label="Debit Card" value="key2" />
//               <Picker.Item label="Credit Card" value="key3" />
//               <Picker.Item label="Net Banking" value="key4" />
//             </Picker>
//             </ModalFilterPicker>
//       <Text>Selected:</Text>
//       <Text>{picked}</Text>
//       <ModalFilterPicker
//         visible={visible}
//         onSelect={this.onSelect}
//         onCancel={this.onCancel}
//         options={options}
//       />
//     </View>

      

//     );
//   }

//   onShow = () => {
//     this.setState({ visible: true });
//   }

//   onSelect = (picked) => {
//     this.setState({
//       picked: picked,
//       visible: false
//     })
//   }

//   onCancel = () => {
//     this.setState({
//       visible: false
//     });
//   }
// }

