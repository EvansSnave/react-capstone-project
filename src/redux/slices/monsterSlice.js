import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMonstersAPI = createAsyncThunk('monsters/fetchMonstersAPI', async () => {
  try {
    const response = await axios.get('https://mhw-db.com/monsters');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong.');
  }
});

const monsters = createSlice({
  name: 'monsters',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonstersAPI.fulfilled, (state, action) => {
        state = action.payload;
      });
  },
});

export default monsters.reducer;
export { fetchMonstersAPI };
