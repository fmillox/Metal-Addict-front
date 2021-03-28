export const SET_LOADING_USER = 'SET_LOADING_USER';
export const FETCH_USER_DATAS = 'FETCH_USER_DATAS';
export const SAVE_USER_DATAS = 'SAVE_USER_DATAS';

export const setLoadingUser = (value) => ({
  type: SET_LOADING_USER,
  value,
});

export const fetchUserDatas = (userId, history) => ({
  type: FETCH_USER_DATAS,
  userId,
  history,
});

export const saveUserDatas = (datas) => ({
  type: SAVE_USER_DATAS,
  datas,
});
