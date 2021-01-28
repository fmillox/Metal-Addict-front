import { SAVE_USER_PICTURES } from 'src/actions/users';
import { SET_LOADING_PICTURES } from 'src/actions/pictures';

const initialState = {
  eventPictures: [],

  reviewPictures: [],

  userPictures: [],

  loading: false,
};

function picturesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_USER_PICTURES:
      return {
        ...state,
        userPictures: action.pictures,
      };

    case SET_LOADING_PICTURES:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
}

export default picturesReducer;
