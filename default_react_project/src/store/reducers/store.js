import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    thisUser: false,
  },
  reducers: {
    // 유저 로그인
    userLogin(state, action) {
      return {
        ...state,
        thisUser: action.payload,
      };
    },

    // 유저 로그아웃
    userLogout(state) {
      state.thisUser = false;
    },
  },
});

const likes = createSlice({
  name: "likes",
  initialState: {
    likeNumber: 0,
  },
  reducers: {
    plusFuntion(state) {
      state.likeNumber += 1;
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    likes: likes.reducer,
  },
});

export let { userLogin, userLogout } = user.actions;
export let { plusFuntion } = likes.actions;
