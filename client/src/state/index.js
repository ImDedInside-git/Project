import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
          state.mode = state.mode === "light" ? "dark" : "light";
      },
      setLogin: (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
      },
      setLogout: (state) => {
          state.user = null;
          state.token = null;
      },
      setBookings: (state, action) => {
          if (!state.user) {
              state.user.bookings = action.payload.bookings;
          } else {
              console.error("User bookings non existant");
          }
      }
      // ! INCOMPLETE
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
