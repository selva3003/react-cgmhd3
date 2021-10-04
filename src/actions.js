import { GET_USERS } from './types';
import axios from 'axios';

export const GetUsers = () => {
  return (dispatch) => {
    console.log('Get users dispatched');

    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const users = res.data;
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    });
  };
};
