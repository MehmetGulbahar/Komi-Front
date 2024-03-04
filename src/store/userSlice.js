import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
    state.value = action.payload
    },
    logout: (state) => {
      state.value = {isTokenValid:false};
    }
  },
});


export const { setUser,logout } = userSlice.actions
export default userSlice.reducer;