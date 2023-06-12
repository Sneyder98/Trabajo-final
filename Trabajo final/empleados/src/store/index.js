import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; 
import userSlice from './user';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
    user:userSlice
});

const persistConfg={
    key: 'root',
    storage : storage,
    whilelist:['user'],
    blacklist:[],
}

const persistedReducer = persistReducer(persistConfg,reducer);

export const store=configureStore({
    reducer:{
        user: persistedReducer,
    }
})

export const persistor = persistStore(store);