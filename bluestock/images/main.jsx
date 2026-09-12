import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechnicalAnalysis from './pages/TechnicalAnalysis.jsx';
import DetailedPage from './pages/DetailedPage.jsx';
import CandleStick from './pages/CandleStick.jsx';
import IpoHomepage from './pages/IpoHomepage.jsx';
import MutualFunds from './pages/MutualFunds.jsx';
import StockSchool from './pages/StockSchool.jsx';
import SignupPage from './pages/SignupPage.jsx';
import SigninPage from './pages/SigninPage.jsx';
import ForgetPass from './pages/ForgetPass.jsx';
import UploadData from './pages/UploadData.jsx';
import { ToastContainer } from 'react-toastify';
import Analytics from './pages/Analytics.jsx';
import ContactUs from './pages/ContactUs.jsx';
import { createRoot } from 'react-dom/client';
import Community from './pages/Community.jsx';
import Dashboard from './pages/Dashboard.jsx';
import HomePage from './pages/HomePage.jsx';
import TechPage from './pages/TechPage.jsx';
import Products from './pages/Products.jsx';
import Carrers from './pages/Carreers.jsx';
import Sector from './pages/Sector.jsx';
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer pauseOnHover={false} draggable={false} autoClose={1500} position='top-center' limit={3} hideProgressBar={true} stacked={true}/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/forgotpass' element={<ForgetPass/>}/>
        <Route path='/uploadfile' element={<UploadData/>}/>
        <Route path='/ipohomepage' element={<IpoHomepage/>}/>
        <Route path='/carrers' element={<Carrers/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/detailedpage' element={<DetailedPage/>}/>
        <Route path='/sector' element={<Sector/>}/>
        <Route path='/mutualfunds' element={<MutualFunds />}/>
        <Route path='/analytics' element={<Analytics />}/>
        <Route path='/stockschool' element={<StockSchool />}/>
        <Route path='/techpage' element={<TechPage />}/>
        <Route path='/technicalanalysis' element={<TechnicalAnalysis />}/>
        <Route path='/candlestick' element={<CandleStick />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
