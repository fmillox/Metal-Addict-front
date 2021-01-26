import { combineReducers } from 'redux';
// on importe tous les reducers
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import reviewsReducer from './reviewsReducer';
import searchFormReducer from './searchFormReducer';
import eventReducer from './eventReducer';
import picturesReducer from './picturesReducer';
import reviewReducer from './reviewReducer';
import reviewManageReducer from './reviewManageReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  reviews: reviewsReducer,
  searchForm: searchFormReducer,
  event: eventReducer,
  pictures: picturesReducer,
  review: reviewReducer,
  reviewManage: reviewManageReducer,
});
export default rootReducer;
