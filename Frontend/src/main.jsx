import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./landing_page/about/aboutPage.jsx"
import Products from "./landing_page/products/productPage.jsx"
import Signup from  "./landing_page/signup/signup.jsx"
import Login from  "./landing_page/login/login.jsx"
import Pricing from "./landing_page/pricing/pricingPage.jsx"
import Support from "./landing_page/support/supportPage.jsx"
import Navbar from './landing_page/navbar';
import Footer from './landing_page/footer';
import NotFound from "./landing_page/notFound.jsx"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/'element={<App/>} />
    <Route path='/login'element={<Login/>} />
    <Route path='/signup'element={<Signup/>} />
    <Route path='/about'element={<About/>} />
    <Route path='/products'element={<Products/>} />
    <Route path='/pricing'element={<Pricing/>} />
    <Route path='/support'element={<Support/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
    <Footer/>
  </BrowserRouter>


)
