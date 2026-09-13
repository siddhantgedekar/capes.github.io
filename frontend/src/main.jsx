import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import Signin from './pages/Signin.jsx';
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';
import UserPage from './pages/UserPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer pauseOnHover={false} draggable={false} autoClose={1000} position='top-center' limit={3} hideProgressBar={true} stacked={true} theme='colored'/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/userpage' element={<UserPage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
