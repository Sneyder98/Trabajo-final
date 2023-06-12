import React from "react";
import {BrowserRouter, Routes, Route, Link, Outlet, useNavigate, Navigate, useParams} from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from "./store";
import SingIn from "./users/SignIn";

let Error404 = () =>{
  return(
    <>
      <Link to="/">Regresar al inicio</Link>
      <h1>Esta pagina no existe - Error 404</h1>
    </>
  )
}

let UsuarioOutlet = () =>{
  let navigate = useNavigate();
  let redirect = () => {
    navigate('/')
  }
  return(
    <>
      <button onClick={redirect}>Ir al inicio</button>
      <Outlet />
    </>
  )
}

let NotImplemented = () =>{
  return (
    <div>
      <h1>Esta pagina no esta lista</h1>
      <Link to="/">Ir al inicio</Link>
    </div>
    )
}

let EditarUsuario = ()=>{
  let {id} = useParams();
  let params = useParams();
  console.log(params);
  return(
    <h1>{id}</h1>
  )
}

let Principal = () =>{
  return <h1>BIENVENIDOS</h1>
}

function App() {
  const isAuth = false;
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Principal/>} />
          
          <Route path="login" element={<SingIn/>} />

          <Route path="usuario" element={<UsuarioOutlet/>} >            
            <Route path="add" element={ isAuth ? <Navigate to='/'/>:<NotImplemented/>} />
            <Route path="edit/:id" element={<EditarUsuario/>} />
            <Route path="delete" element={<NotImplemented/>} />
          </Route>

          <Route path="producto" element={<NotImplemented/>} >
            <Route path="add" element={<NotImplemented/>} />
            <Route path="edit" element={<NotImplemented/>} />
            <Route path="delete" element={<NotImplemented/>} />
          </Route>
          
          <Route path="*" element={<Error404/>} />

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
