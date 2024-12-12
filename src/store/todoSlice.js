import { createSlice } from '@reduxjs/toolkit';
import { INIT_TODO_LIST } from '../constants/data';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    lists: INIT_TODO_LIST,
    listsLength: INIT_TODO_LIST.length,
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
    addList: (state, action) => {
      const title = action.payload.title;
      const newId = state.listsLength + 1;
      state.lists = [
        ...state.lists,
        {
          id: newId,
          title: title,
        },
      ];
      state.listsLength = newId;
    },
  },
});

export const { deleteList, addList } = todoSlice.actions;

export default todoSlice.reducer;
