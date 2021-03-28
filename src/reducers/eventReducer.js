import {
  SET_LOADING_EVENT,
  SAVE_EVENT,
  SAVE_USERS_PARTICIPATE_IN_EVENT,
  ADD_USER_PARTICIPATE_IN_EVENT,
  SET_LOADING_UPLOAD_PICTURE_IN_EVENT,
} from 'src/actions/event';

const initialState = {
  /* indicate if the event is loading */
  loading: false,
  /* data of the event */
  data: null,
  /* datas of the users who had participated at the event */
  users: [],
  /* indicate if the user is uploading a picture */
  loadingUploadPicture: false,
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
    case SAVE_USERS_PARTICIPATE_IN_EVENT:
      return {
        ...state,
        users: action.users,
      };
    case ADD_USER_PARTICIPATE_IN_EVENT:
      return {
        ...state,
        users: state.users.concat({ ...action.user }),
      };
    case SET_LOADING_UPLOAD_PICTURE_IN_EVENT:
      return {
        ...state,
        loadingUploadPicture: action.value,
      };
    default:
      return state;
  }
}

export default eventReducer;
