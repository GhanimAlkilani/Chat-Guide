import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS } from './types';

import * as firebase from 'firebase';

const User = {
  ID: null,
  email: null,
  Name: null,
  major: null,
  courses: [,],
};
export const Logginguser = (ID, password) => {
  let email = ID + '@ksu.edu.sa';

 return dispatch => {
   dispatch({ type: LOGIN_ATTEMPT });
    firebase.auth().signInWithEmailAndPassword(email , password)
   .then(function(u){

       User.email = u.user.email;
       User.userID = ID;

       login_Success(dispatch, User);
   })
   .catch((error) => {
     console.log(error.message)
       login_Failed(dispatch,error.message);
     });
 };
};

const login_Failed = (dispatch, errormessage) => {
  dispatch({ type: LOGIN_FAILED, error: errormessage });
};

const login_Success = (dispatch, user) => {
  firebase.database().ref('students/'+user.userID).once('value', function (snapshot) {
    user.courses=snapshot.val().groups;
    user.major=snapshot.val().Major;
    user.ID=snapshot.val().ID;
    user.Name=snapshot.val().Name;
    dispatch({ type: LOGIN_SUCCESS, user: user });
  });

};
