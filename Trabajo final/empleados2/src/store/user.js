import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('user/singUp', async(credentials)=>{
    return credentials;
})

let userSlice = createSlice({
    name: 'user',
    initialState:{
        user:null,
        status:''
    },
    reducers:{
        signIn: (state, action) =>{
            state.user=action.payload;
        },
        logOut:(state)=>{
            state.user=null;
        }
    },
    extraReducers:{
        [signUp.pending]: (state, action)=>{
            state.status = 'loading...'
        },
        [signUp.fulfilled]: (state,action)=>{
            state.user = action.payload;
        },
        [signUp.rejected]:(state, action) => {
            state.status = 'Fallo'
        }
    }
});

export const {signIn, logOut}=userSlice.actions;

export default userSlice.reducer;