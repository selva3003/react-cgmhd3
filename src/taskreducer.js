import { GET_USERS } from './types';
import { GetUsers } from './actions';

const initialState = {
  loading: false,
  users: [],
};
const taskreducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
  }
};

export default taskreducer;
