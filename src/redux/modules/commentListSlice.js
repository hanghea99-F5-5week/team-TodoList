import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByTodoId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

const commentListSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = commentListSlice.actions;
export default commentListSlice.reducer;
