import  {
    AUTHED
} from './types';

import firebase  from 'firebase/app';
import 'firebase/auth';



    const User = {
      ID: null,
      Name: null,
      major: null,
      courses: [,],
    };

export const Autherized = () => {

    return (dispatch)=>{
      firebase.auth().onAuthStateChanged((u) => {
      if (u) {
        console.log("you'r autherized ");
        User.ID = u.displayName;
        retrieve_data(dispatch,User);

      } else {
        console.log("you'r NOT autherized ");
        dispatch({type: AUTHED , user:null});
      }
    });
    };
};


const retrieve_data= (dispatch,user) =>{
  firebase.database().ref('students/'+user.ID).once('value', function (snapshot) {
    user.courses=snapshot.val().groups;
    user.major=snapshot.val().Major;
    user.ID=snapshot.val().ID;
    user.Name=snapshot.val().Name;
    dispatch({type: AUTHED , user:User});
  });

};
