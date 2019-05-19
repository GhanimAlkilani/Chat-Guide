import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS } from './types';

import * as firebase from 'firebase';

 

export const getcourses = (ID) => {
    
      dispatch({ type: LOGIN_ATTEMPT });
      login_Success(dispatch, User);
  return dispatch => {
    dispatch({ type: LOGIN_ATTEMPT });
    login_Success(dispatch, User);
    firebase.database().ref('/users/'+ ID +"/"+courses ).on('value', (courses) => {
        const userObj = courses.val();
        console.log(courses);
      });
     
  };
};
 

const login_Success = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, user: user });
};
