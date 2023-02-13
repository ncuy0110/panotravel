import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  },
  reducers: {
    setAuth(state, action) {
      state = action.payload;
    },
    resetAuth(state, action) {
      state = {
        accessToken: null,
        refreshToken: null,
      };
    },
  },
});

const { actions, reducer } = authSlice;
export const { setAuth, resetAuth } = actions;
export default reducer;
