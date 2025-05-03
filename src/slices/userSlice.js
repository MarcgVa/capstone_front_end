import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "users",
  initialState: {
    value: {},
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;

export const selectUser = (state) => state.user.value;
export const { setSelectedUser } = userSlice.actions;