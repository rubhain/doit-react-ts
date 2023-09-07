import { createSlice } from '@reduxjs/toolkit';

export const statesSlice = createSlice({
  name: 'states',
  initialState: {},
  reducers: {
    sideNavState: () => {},
  },
});

export const { sideNavState } = statesSlice.actions;
export default statesSlice.reducer;
