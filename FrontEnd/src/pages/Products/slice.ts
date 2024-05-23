import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v2Fetch } from '../../util/httpUtil';
import { LocationState } from './types/location.ts';

const initialState: LocationState = {
  payload: [],
  error: '',
  loading: true,
};
export const getProducts = createAsyncThunk('productsSlice/fetch', (_, { rejectWithValue }) => {
  return v2Fetch(`/api/products`)
    .then((response: any) => {
      if (response.status === 200) {
        return Promise.resolve(
          response?.data
        );
      }
    })
    .catch((error: any) => {
      const errorThrown = JSON.parse(error);
      return rejectWithValue(errorThrown?.message);
    });
});

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    cleanLocationData(state) {
      state.loading = false;
      state.payload = [];
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.loading = true;
      state.error = '';
      state.payload = [];
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.payload?.toString();
    });
  },
});


export const {cleanLocationData} = productsSlice.actions;