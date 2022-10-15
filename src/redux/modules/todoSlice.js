import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: {
    id: 0,
    body: "",
    username: "",
    title: "",
  },
  error: null,
  isLoading: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
