import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS ,FETCH_COURSES,UPDATE_COURSES,LOGGED_OUT,AUTHED} from '../action/types';

const initial = {
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

export default (state = initial, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      console.log(action.fetchcourses+'  in reducer');
      return { ...state, fetchcourses: action.fetchcourses };
      case UPDATE_COURSES:
        console.log(action.courses);
        return { ...state, courses: action.courses };
      case LOGGED_OUT:
        return {...state , user:null};
      case AUTHED:
              return {...state , user:action.user};
      case LOGIN_SUCCESS:
        console.log(action.user);
        return { ...state, loading: false, user: action.user };
    default:
      return { ...state };
  }
};
