import {
  SET_LOADING_PICTURES,
  SAVE_EVENT_PICTURES,
  ADD_EVENT_PICTURE,
} from 'src/actions/pictures';
import { SAVE_USER_PICTURES } from 'src/actions/users';

const initialState = {
  eventPictures: [],

  reviewPictures: [],

  userPictures: [],

  loading: false,
};

function picturesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING_PICTURES:
      return {
        ...state,
        loading: action.value,
      };

    case SAVE_EVENT_PICTURES:
      return {
        ...state,
        eventPictures: action.pictures,
      };

    case ADD_EVENT_PICTURE:
      return {
        ...state,
        eventPictures: [action.picture].concat([...state.eventPictures]),
      };

    case SAVE_USER_PICTURES:
      return {
        ...state,
        userPictures: action.pictures,
      };

    default:
      return state;
  }
}

export default picturesReducer;
