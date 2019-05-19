import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS } from './types';

import * as firebase from 'firebase';


export const Signup = (ID,password,name, Major,groups) => {
  let email = ID + '@ksu.edu.sa';

 return dispatch => {
   dispatch({ type: LOGIN_ATTEMPT });
    firebase.auth().createUserWithEmailAndPassword(email , password)
   .then(function(u){
         console.log(u)
       Signup_Success(dispatch, ID,name,Major,groups);
   })
   .catch((error) => {
       console.log(error.message)
       Signup_Failed(dispatch,error.message);
     });
 };
};

const Signup_Failed = (dispatch, errormessage) => {
  dispatch({ type: LOGIN_FAILED, error: errormessage });
};

const Signup_Success = (dispatch, ID,name,Major,groups) => {
  firebase.database().ref('students/' + ID).set({
    Name: name,
    Major: Major,
    Groups:groups
  });
  dispatch({ type: LOGIN_SUCCESS, user: user });
};
