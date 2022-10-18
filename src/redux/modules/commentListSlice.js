import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

/**Thunk addComment */
export const __addComments = createAsyncThunk(
  "commentList/addCommnets",
  async (commentData, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/comments",
        commentData
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**Thunk getComment */
export const __getComments = createAsyncThunk(
  "commentList/getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**Thunk deleteComment */
export const __deleteComments = createAsyncThunk(
  "commentLists/deleteComments",
  async (commentId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/comments/${commentId}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentListSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {},
  extraReducers: {
    /** 댓글 추가하기*/
    [__addComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    /**댓글 가져오기 */
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    /**댓글 삭제하기 */
    [__deleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      console.log("ac", action);
      state.isLoading = false;
      const target = state.comments.findIndex(
        (comment) => comment.comment.id === action.payload
      );
      state.comments.splice(target, 1);
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentListSlice.actions;
export default commentListSlice.reducer;
