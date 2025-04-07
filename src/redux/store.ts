import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import baseApi from 'src/api/baseApi';
import { appSessionSlice } from 'src/redux/slices/appSession.slice';
import { authSlice } from 'src/redux/slices/auth.slice';
import { profileSlice } from 'src/redux/slices/profile.slice';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSessionSlice.name]: appSessionSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
