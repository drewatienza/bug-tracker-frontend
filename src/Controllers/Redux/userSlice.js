import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({name: 'Karen Alonzo'})
      state.push({name: 'Rich Gruben'})
    }
  }
})

export default slice.reducer;

export const {getUser} = slice.actions;