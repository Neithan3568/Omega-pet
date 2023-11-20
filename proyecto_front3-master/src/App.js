import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/auth/login';
import Register from './Paginas/auth/register';
import AdminHome from './Paginas/admin/home'; // Renombré para evitar confusión
import Citas from './Paginas/admin/citas_admin';
import ClientHome from './Paginas/clientes/home_cliente'; // Renombré para evitar confusión
import RegistroCita from './Paginas/clientes/registroCitas';
import VerCitas from './Paginas/clientes/verCitas';
import Cart from './cart';
import { CartProvider } from 'react-user-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'; // Asegúrate de importar el componente Home correcto

function App() {
  return (
    <Fragment>
      <Router>
        <CartProvider>
          <Home/>
          <cart/>
          
        <CartProvider/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/clientHome" element={<ClientHome />} />
            <Route path="/registrarCitas" element={<RegistroCita />} />
            <Route path="/verCitas" element={<VerCitas />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </CartProvider>
      </Router>
    </Fragment>
  );
}

export default App;
