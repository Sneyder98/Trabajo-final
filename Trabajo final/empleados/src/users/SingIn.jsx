import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useForm } from 'react-hook-form';
import { logOut, signIn, signUp } from "../store/user";

let SignIn =(props)=>{
    let dispatch = useDispatch();

    let user = useSelector(state => state.user.user);

    const {register, handleSubmit}=useForm();

    let onSubmit =(data)=>{
        dispatch(
            signIn(
                {credential:data}
            )            
        )
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" name="email" {...register("email")} placeholder="Correo" />
                <input type="password" name="password" {...register("password")} placeholder="password" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default SignIn;