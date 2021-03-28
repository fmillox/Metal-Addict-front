import { expect } from 'chai';

import userReducer from 'src/reducers/userReducer';

import { setLoadingUser, saveUserDatas } from 'src/actions/user';

import { saveAvatar } from 'src/actions/auth';

describe('reducer for user', () => {
  it('is a function', () => {
    expect(userReducer).to.be.a('function');
  });

  it('test initial state', () => {
    const expectedInitialState = {
      user: {},
      loading: false,
    };

    expect(userReducer()).to.deep.equal(expectedInitialState);
  });

  it('check treatment of action SET_LOADING_USER', () => {
    const state = {
      user: {},
      loading: false,
    };

    const value = true;

    const action = setLoadingUser(value);

    const expectedState = {
      ...state,
      loading: value,
    };

    expect(userReducer(state, action)).to.deep.equal(expectedState);
  });

  it('check treatment of action SAVE_USER_DATAS', () => {
    const state = {
      user: {},
      loading: false,
    };

    const datas = {
      id: 1,
      email: 'milou64100@gmail.com',
      nickname: 'Milou64100',
      biography: 'Fan inconditionnel de Chantal Goya...paix à son âme artistique, je me suis perdu sur ce site de dépravés ;-)',
      avatar: '/uploads/pictures/avatar-602137062b30c.jpg',
    };

    const action = saveUserDatas(datas);

    const expectedState = {
      ...state,
      user: datas,
    };

    expect(userReducer(state, action)).to.deep.equal(expectedState);
  });

  it('check treatment of action SAVE_AVATAR', () => {
    const state = {
      user: {
        id: 1,
        email: 'milou64100@gmail.com',
        nickname: 'Milou64100',
        biography: 'Fan inconditionnel de Chantal Goya...paix à son âme artistique, je me suis perdu sur ce site de dépravés ;-)',
        avatar: '/uploads/pictures/avatar-602137062b30c.jpg',
      },
      loading: false,
    };

    const path = '/uploads/pictures/new-avatar.jpg';

    const action = saveAvatar(path);

    const expectedState = {
      ...state,
      user: {
        id: 1,
        email: 'milou64100@gmail.com',
        nickname: 'Milou64100',
        biography: 'Fan inconditionnel de Chantal Goya...paix à son âme artistique, je me suis perdu sur ce site de dépravés ;-)',
        avatar: path,
      },
    };

    expect(userReducer(state, action)).to.deep.equal(expectedState);
  });
});
