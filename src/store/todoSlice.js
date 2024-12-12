import { createSlice } from '@reduxjs/toolkit';
import { INIT_TODO_LIST } from '../constants/data';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    lists: INIT_TODO_LIST,
  },
  reducers: {
    deleteList: (state, action) => {
      if (
        window.confirm(`タスク：${action.payload.title}を本当に削除しますか？`)
      ) {
        state.lists = state.lists.filter(
          (list) => list.id !== action.payload.id
        );
      }
    },
  },
});

export const { deleteList } = todoSlice.actions;

export default todoSlice.reducer;
