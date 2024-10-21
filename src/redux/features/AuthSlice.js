import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "User",
  initialState: {
    user: localStorage.getItem("smcorpcredential")
      ? JSON.parse(localStorage.getItem("smcorpcredential"))
      : { status: false },
  },
  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("smcorpcredential", JSON.stringify(action.payload));
    },
    logoutUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("smcorpcredential", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInUser, logoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
