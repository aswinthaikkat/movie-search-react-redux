import { FETCH } from '../actions/type';
const initialState = {
  movie: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        movie: action.payload,
        loading: true,
      };

    case 'ERROR':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
