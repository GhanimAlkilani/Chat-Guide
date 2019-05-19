import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS,UPDATE_COURSES } from './types';

import * as firebase from 'firebase';


export const addcourses = (USER,groups) => {
  console.log(groups)
  USER.groups=groups;
 return dispatch => {
   dispatch({ type: LOGIN_ATTEMPT });
   firebase.database().ref('students/' + USER.userID).update({
    groups:groups.concat(USER.courses)
   });
   firebase.database().ref('students/'+USER.userID).once('value', function (snapshot) {
     groups=snapshot.val().groups;
     dispatch({ type: UPDATE_COURSES , courses: groups });
   });
 };
};
