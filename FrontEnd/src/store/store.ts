import {configureStore} from "@reduxjs/toolkit";
import {
    locationSlice
} from '../pages/HomePage/slice.ts';
import {productsSlice} from "../pages/Products/slice";




export  const store = configureStore(
    {
        reducer:{
          locationData:  locationSlice.reducer,
            productData:  productsSlice.reducer
        }
    }
)

export  type RootState = ReturnType<typeof store.getState>;
export  type AppDispatch = typeof  store.dispatch;