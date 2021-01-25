import { combineReducers } from 'redux';
// on importe tous les reducers
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import reviewsReducer from './reviewsReducer';
import searchFormReducer from './searchFormReducer';
import eventReducer from './eventReducer';
import picturesReducer from './picturesReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  reviews: reviewsReducer,
  searchForm: searchFormReducer,
  event: eventReducer,
  pictures: picturesReducer,
  review: reviewReducer,
});
export default rootReducer;
