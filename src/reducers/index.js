import { combineReducers } from 'redux';
// on importe tous les reducers
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import reviewsReducer from './reviewsReducer';
import searchFormReducer from './searchFormReducer';
import picturesReducer from './picturesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  reviews: reviewsReducer,
  searchForm: searchFormReducer,
  pictures: picturesReducer,
});
export default rootReducer;
