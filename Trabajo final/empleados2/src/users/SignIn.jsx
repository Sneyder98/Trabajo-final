import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { signIn, logOut, signUp } from "../store/user";
import { useForm } from 'react-hook-form';

let SingIn = (props) => {
    let dispatch = useDispatch();
    const { register, handleSubmit} = useForm();

    let onSubmit = (data) =>{
        dispatch(
            signIn({
                credentials:data
            })
        )
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" name="email" {...register("email")} placeholder="email" />
                <input type="password" name="password" {...register("password")} placeholder="email" />
                <input type="submit" value="enviar"/>
            </form>
        </div>
    )
}

export default SingIn;