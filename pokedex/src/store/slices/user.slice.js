import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    changeUser: (state, action) => action.payload
  }
})

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
