import { FETCH_COURSES } from './types';

import * as firebase from 'firebase';

const Courses = {
  fetchcourses: [
    {
    key: 'SWE211',
    label: 'SWE211',
  },
  {
    key: 'SWE444',
    label: 'SWE444',
  },
  {
    key: 'SWE434',
    label: 'SWE434',
  },
   {
    key: 'SWE313',
    label: 'SWE313',
  },
   {
    key: 'SWE411',
    label: 'SWE411',
  },
  {
    key: 'SWE466',
    label: 'SWE466',
  },
  {
    key: 'SWE496',
    label: 'SWE496',
  },
  {
    key: 'SWE497',
    label: 'SWE497',
  },
  ],
};

 
export const Fetch = (ID, password) => {
  // let email = ID + '@ksu.edu.sa';
  return dispatch => {
    dispatch({ type: FETCH_COURSES});
    dispatch({ type: FETCH_COURSES, fetchcourses: Courses.fetchcourses });
   
  };
};

