import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const signUp = createAsyncThunk('user/signUp', async ({credential})=>{

    let response = await Axios.post('http://localhost:3000/api/login',{
        user: credential
    })
    console.log(response.data);
    return response.data.user;
})

export const signIn = createAsyncThunk('user/signIn', async ({credential})=>{

    let response = await Axios.post('http://localhost:3000/api/login',{
        user: credential
    })
    console.log(response.data);
    return response.data.user;
})

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: null
    },
    reducers:{
        
        logOut: (state)=>{
            state.user = null
        }
    },
    extraReducers:{
        [signUp.pending]:(state,action)=>{
            state.status = '..loading';
        },
        [signUp.fulfilled]:(state,action)=>{
            state.user=action.payload;
        },
        [signUp.rejected]:(state,action)=>{
            state.status='Fallido';
        },
        [signIn.pending]:(state,action)=>{
            state.status = '..loading';
        },
        [signIn.fulfilled]:(state,action)=>{
            state.user=action.payload;
        },
        [signIn.rejected]:(state,action)=>{
            state.status='Fallido';
        }

    }
});

export const {logOut}=userSlice.actions;

export default userSlice.reducer;