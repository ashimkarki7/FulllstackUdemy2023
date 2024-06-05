import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v2Fetch } from '../../util/httpUtil';
import { LocationState } from './types/location.ts';

const initialState: LocationState = {
  payload: [],
  error: '',
  loading: true,
};
export const getLocations = createAsyncThunk('locationSlice/fetch', (_, { rejectWithValue }) => {
  return v2Fetch(`/api/locations`)
    .then((response: any) => {
      if (response.status === 200) {
        console.log('fff',  response?.data)
        return Promise.resolve(
          response?.data?.locations?.map((responseFromData: any) => {
            return {
              lat: responseFromData[0],
              lng: responseFromData[1],
            };
          })
        );
      }
    })
    .catch((error: any) => {
      const errorThrown = JSON.parse(error);
      return rejectWithValue(errorThrown?.message);
    });
});

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    cleanLocationData(state) {
      state.loading = false;
      state.payload = [];
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(getLocations.pending, state => {
      state.loading = true;
      state.error = '';
      state.payload = [];
    });

    builder.addCase(getLocations.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
    });
    builder.addCase(getLocations.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.payload?.toString();
    });
  },
});


export const {cleanLocationData} = locationSlice.actions;