import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { persistor, store } from './store';
import SignIn from './users/SingIn';
import { logOut } from './store/user';
import { PersistGate } from 'redux-persist/integration/react'

let Hola = () => {
  return(<h1>BIENVENIDOS</h1>)
}

let UsuariosOutlet=()=>{
  let user = useSelector(state => state.user.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let doLogOut =()=>{
    dispatch(
      logOut()
    )

    navigate("/");
  }

  return(
    <>
    {
      user && <button onClick={doLogOut}>Cerrar Sesion</button>
    }
    <Outlet/>
    </>
  )
}

let NotImplement=()=>{
  return(
  <>
    <h1>Pagina no encontrada</h1>
  </>
  )
}

let Error404=()=>{
  return(
  <>
    <h1>Error404</h1>
    <h2>pagina no existe</h2>
    <h3>
      <Link to="/">Regresar al inicio</Link>
    </h3>
  </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path='/' element={<Hola/>} />

            
            <Route path='usuarios' element={<UsuariosOutlet/>}>
              <Route path='login' element={<SignIn/>} />
              <Route path='add' element={<NotImplement/>} />
              <Route path='edit' element={<NotImplement/>} />
              <Route path='delete' element={<NotImplement/>} />
            </Route>

            <Route path='*' element={<Error404/>} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
