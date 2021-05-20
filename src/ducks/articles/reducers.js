import {GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILED} from './types';

export const INITIAL_STATE = {
  loading: true,
  data: [],
  error: false,
  errorMessage: null,
};

const articles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_ARTICLES_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default articles;
