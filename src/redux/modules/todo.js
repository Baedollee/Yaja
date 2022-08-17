import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import http from '../../http';

const initialState = {
  todoList: [],
};
export const __addTodo = createAsyncThunk(
  'todo/addTodo',
  async (payload, thunkAPI) => {
    try {
      console.log('axios', payload);
      const data = await http.post('/todos', payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodoList = createAsyncThunk(
  'todo/getTodoList',
  async (payload, thunkAPI) => {
    try {
      const data = await http.get('/todos');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteTodoList = createAsyncThunk(
  'todo/deleteTodoList',
  async (id, thunkAPI) => {
    try {
      const data = await http.delete(`/todos/${id}`);

      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __editTodoList = createAsyncThunk(
  'todo/editTodoList',
  async (todo, thunkAPI) => {
    try {
      const data = await http.patch(`/todos/${todo.id}`, todo);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: {
    [__addTodo.fulfilled]: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    [__getTodoList.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [__deleteTodoList.fulfilled]: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      console.log(action);
    },
    [__editTodoList.fulfilled]: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index] = action.payload;
    },
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
