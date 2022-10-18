import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

/**Thunk addTodos */
export const __addTodos = createAsyncThunk(
  "todos/addTodos",
  async (todoData, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/todos", todoData);
      // console.log(todoData);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
/**Thunk getTodos */
export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    //게시글 추가
    [__addTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__addTodos.fulfilled]: (state, action) => {
      console.log("act", action);
      state.isLoading = false;

      state.todos.push(action.payload);
    },
    [__addTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //게시글 조회
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;

      // state.todos.splice(target, 1, action.payload);
      // state.isSuccess = true;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
