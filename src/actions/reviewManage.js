export const SET_LOADING_REVIEW_MANAGE = 'SET_LOADING_REVIEW_MANAGE';
export const FETCH_REVIEW_MANAGE = 'FETCH_REVIEW_MANAGE';
export const SAVE_REVIEW_MANAGE = 'SAVE_REVIEW_MANAGE';
export const SET_REVIEW_MANAGE_TITLE = 'SET_REVIEW_MANAGE_TITLE';
export const SET_REVIEW_MANAGE_CONTENT = 'SET_REVIEW_MANAGE_CONTENT';
export const CREATE_REVIEW_MANAGE = 'CREATE_REVIEW_MANAGE';
export const EDIT_REVIEW_MANAGE = 'EDIT_REVIEW_MANAGE';
export const RESET_REVIEW_MANAGE = 'RESET_REVIEW_MANAGE';

export const setLoadingReviewManage = (value) => ({
  type: SET_LOADING_REVIEW_MANAGE,
  value,
});

export const fetchReviewManage = (id) => ({
  type: FETCH_REVIEW_MANAGE,
  id,
});

export const saveReviewManage = (title, content) => ({
  type: SAVE_REVIEW_MANAGE,
  title,
  content,
});

export const setReviewManageTitle = (value) => ({
  type: SET_REVIEW_MANAGE_TITLE,
  value,
});

export const setReviewManageContent = (value) => ({
  type: SET_REVIEW_MANAGE_CONTENT,
  value,
});

export const createReviewManage = (setlistId, history) => ({
  type: CREATE_REVIEW_MANAGE,
  setlistId,
  history,
});

export const editReviewManage = (id, history) => ({
  type: EDIT_REVIEW_MANAGE,
  id,
  history,
});

export const resetReviewManage = () => ({
  type: RESET_REVIEW_MANAGE,
});
