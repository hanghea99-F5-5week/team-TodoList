import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
