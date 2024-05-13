import {configureStore} from "@reduxjs/toolkit";
import {
    locationSlice
} from '../pages/HomePage/slice.ts';




export  const store = configureStore(
    {
        reducer:{
          locationData:  locationSlice.reducer
        }
    }
)

export  type RootState = ReturnType<typeof store.getState>;
export  type AppDispatch = typeof  store.dispatch;