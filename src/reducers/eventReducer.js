import {
  SET_LOADING_EVENT,
  SAVE_EVENT,
} from 'src/actions/event';

const initialState = {
  loading: false,

  data: null,
};

function eventReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_EVENT:
      return {
        ...state,
        loading: action.value,
      };
    case SAVE_EVENT:
      return {
        ...state,
        data: action.event,
      };
    default:
      return state;
  }
}

export default eventReducer;
