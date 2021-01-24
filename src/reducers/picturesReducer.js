import { DISPLAY_ALL_PICTURES } from 'src/actions/pictures';

const initialState = {
  allPictures: false,
};

function picturesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISPLAY_ALL_PICTURES:
      return {
        ...state,
        allPictures: !state.allPictures,
      };

    default:
      return state;
  }
}

export default picturesReducer;
