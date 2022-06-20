import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: ''
}

export const infoSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload.info
    }
  }
})

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;