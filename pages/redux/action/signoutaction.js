import  {
    LOGGED_OUT
} from './types';
const USER = {
  loading: false,
  error: '',
  user: {
    ID: null,
    userID: null,
    email: null,
    username: null,
    phonenumber: null,
    major: null,
    courses: [],
  },
  fetchcourses: [],
};
import firebase  from 'firebase/app';
import 'firebase/auth';

export const Signoutuser = () => {
    return (dispatch)=>{
        firebase.auth().signOut();
        console.log('you logged out');
        dispatch({type: LOGGED_OUT,user:USER});
    }
};
