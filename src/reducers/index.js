import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import reviewsReducer from './reviewsReducer';
import searchFormReducer from './searchFormReducer';
import eventReducer from './eventReducer';
import picturesReducer from './picturesReducer';
import reviewReducer from './reviewReducer';
import reviewManageReducer from './reviewManageReducer';
import userReducer from './userReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  events: eventsReducer,
  reviews: reviewsReducer,
  searchForm: searchFormReducer,
  event: eventReducer,
  pictures: picturesReducer,
  review: reviewReducer,
  reviewManage: reviewManageReducer,
  user: userReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
