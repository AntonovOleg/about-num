import { createSlice } from '@reduxjs/toolkit';

interface IInitState {
  text: string
}

const initialState: IInitState = {
  text: '',
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.text = action.payload.info;
    },
  },
});

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
