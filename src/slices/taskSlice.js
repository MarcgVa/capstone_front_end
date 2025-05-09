import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    value: {},
  },
  reducers: {
    setSelectedTask: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default taskSlice.reducer;

export const selectedTask = (state) => state.task.value;
export const { setSelectedTask } = taskSlice.actions;
